import React from 'react';

export default function Navbar () {
  return (
    <nav class="m-10 text-center space-x-4">
            <a class="px-4 py-2 text-white bg-black rounded-full
            hover:rounded" href="/">Home</a>
            <a class="px-4 py-2 text-white bg-black rounded-full
            hover:rounded" href="about">About</a>
            <a class="px-4 py-2 text-white bg-black rounded-full
            hover:rounded" href="projects">Projects</a>
    </nav>
  )
}
