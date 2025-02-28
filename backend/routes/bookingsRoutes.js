const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const Room = require("../models/room");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51PWgok070BlTx4XYNXLOvkUhNIBTj3wqyLgaUbEanRayaHbhXNurffHYLoKtIqAhfHDg0VoxzpVSa2cFutRQ9XJK00AF9SsKPd"
);

router.post("/bookroom", async (req, res) => {
  const { room, userid, fromdate, todate, totalamount, totaldays, token } =
    req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: totalamount * 100,
        customer: customer.id,
        currency: "INR",
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
     
        const newbooking = new Booking({
          room: room.name,
          roomid: room._id,
          userid,
          fromdate,
          todate,
          totalamount,
          totaldays,
          transactionId: "1234",
        });

        const booking = await newbooking.save();

        const roomtemp = await Room.findOne({ _id: room._id });

        roomtemp.currentbookings.push({
          bookingid: booking._id,
          fromdate: fromdate,
          todate: todate,
          userid: userid,
          status: booking.status,
        });

        await roomtemp.save();
     
        
     
    }

    res.send("Payment Successful, Your Room is Booked Enjoy...");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/getuserbookings", async (req, res) => {
  const { userid } = req.body;
  console.log("Fetching bookings for User ID:", userid); // Debugging log

  try {
    const bookings = await Booking.find({ userid: userid });
    res.json(bookings);
  } catch (error) {
    console.error("Error fetching user bookings:", error);
    return res.status(400).json({ error: "Error fetching user bookings" });
  }
});

// Get all bookings (For Admin Panel)
router.get("/getallbookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    console.error("Error fetching all bookings:", error);
    return res.status(400).json({ error: "Error fetching bookings" });
  }
});


module.exports = router;

