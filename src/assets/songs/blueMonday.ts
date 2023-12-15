import { v4 as uuid } from "uuid";

export const blueMonday = {
  title: "Blue Monday",
  slug: "blue-monday",
  artist: "New Order",
  year: "1986",
  studio: "Britannia Row Studios",
  location: "London, England",
  bpm: 139,
  start: 0,
  end: 490,
  tracks: [
    {
      id: uuid(),
      name: "Drums 1",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/blueMonday/01-Drums-01.mp3",
    },
    {
      id: uuid(),
      name: "Drums 2",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/blueMonday/02-Drums-02.mp3",
    },
    {
      id: uuid(),
      name: "Drums 3",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/blueMonday/03-Drums-03.mp3",
    },
    {
      id: uuid(),
      name: "SynthBass",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/blueMonday/04-Synth-Bass.mp3",
    },
    {
      id: uuid(),
      name: "Bass Gtr",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/blueMonday/05-Real-Bass.mp3",
    },
    {
      id: uuid(),
      name: "Synths 1",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/blueMonday/07-Synths-01.mp3",
    },
    {
      id: uuid(),
      name: "Synths 2",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/blueMonday/08-Synths-02.mp3",
    },
    {
      id: uuid(),
      name: "Vocals",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/blueMonday/06-Vocals.mp3",
    },
  ],
};
