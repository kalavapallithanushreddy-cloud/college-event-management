const express = require("express");
const Event = require("../models/Event");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, date, time, venue, organizer, participants, description } = req.body;

    if (!name || !date || !time || !venue || !organizer) {
      return res.status(400).json({
        message: "Please provide name, date, time, venue, and organizer"
      });
    }

    const cleanedParticipants = Array.isArray(participants)
      ? participants.map((item) => item.trim()).filter(Boolean)
      : [];

    const event = await Event.create({
      name,
      date,
      time,
      venue,
      organizer,
      participants: cleanedParticipants,
      description: description || ""
    });

    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { name, date, time, venue, organizer, participants, description } = req.body;

    if (!name || !date || !time || !venue || !organizer) {
      return res.status(400).json({
        message: "Please provide name, date, time, venue, and organizer"
      });
    }

    const cleanedParticipants = Array.isArray(participants)
      ? participants.map((item) => item.trim()).filter(Boolean)
      : [];

    const event = await Event.findByIdAndUpdate(
      req.params.id,
      {
        name,
        date,
        time,
        venue,
        organizer,
        participants: cleanedParticipants,
        description: description || ""
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
