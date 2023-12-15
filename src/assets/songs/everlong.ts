import { v4 as uuid } from "uuid";

export const everlong = {
  title: "Everlong",
  artist: "Foo Fighters",
  year: "1997",
  studio: "Grandmaster Recorders",
  location: "Hollywood, CA",
  bpm: 158,
  start: 0,
  end: 250,
  tracks: [
    {
      id: uuid(),
      songSlug: "everlong",
      name: "Kick",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/everlong/01.kick.ogg",
    },
    {
      id: uuid(),
      songSlug: "everlong",
      name: "Snare",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/everlong/02.snare.ogg",
    },
    {
      id: uuid(),
      songSlug: "everlong",
      name: "Room",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/everlong/03.room.ogg",
    },
    {
      id: uuid(),
      songSlug: "everlong",
      name: "Bass",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/everlong/04.bass.ogg",
    },
    {
      id: uuid(),
      songSlug: "everlong",
      name: "Guitar",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/everlong/05.gtr.ogg",
    },
    {
      id: uuid(),
      name: "Vocals",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/everlong/06.vox.ogg",
    },
    {
      id: uuid(),
      name: "Extras",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/everlong/07.extra.ogg",
    },
    {
      id: uuid(),
      songSlug: "everlong",
      name: "Crowd",
      path: "https://ioxpcmpvgermtfqxwykx.supabase.co/storage/v1/object/public/songs/everlong/08.crowd.ogg",
    },
  ],
};
