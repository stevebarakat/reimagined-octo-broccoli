import { v4 as uuid } from "uuid";

export const justDance = {
  title: "Just Dance",
  slug: "just-dance",
  artist: "Lady Gaga",
  year: "2008",
  studio: "Record Plant Studios",
  location: "Los Angeles, CA",
  bpm: 119,
  start: 4,
  end: 248,
  tracks: [
    {
      id: uuid(),
      name: "Kick",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/justDance/kickdrum.mp3",
    },
    {
      id: uuid(),
      name: "Snare",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/justDance/snare.mp3",
    },
    {
      id: uuid(),
      name: "Cymbals",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/justDance/cymbals.mp3",
    },
    {
      id: uuid(),
      name: "Synth 1",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/justDance/synth1.mp3",
    },
    {
      id: uuid(),
      name: "Synth 2",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/justDance/synth2.mp3",
    },
    {
      id: uuid(),
      name: "Extra Synth",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/justDance/extrasynth.mp3",
    },
    {
      id: uuid(),
      name: "Vocals",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/justDance/vocals.mp3",
    },
  ],
};
