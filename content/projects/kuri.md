---
title: Kuri
type: project
date: 2018-05-00T11:13:20+00:00

thumb:
  description: 
    The adorable home robot with advanced computer vision & sensor
    fusion
  img: kuri_thumb.jpg

highlights:
- Implemented person tracker using a custom systematic importance resampling particle filter to fuse point clouds from depth sensor with visual bounding boxes from MobileNet object detector  
- Implemented person follower using a PID controller and a feedback linearization approach
- Integrated person following feature into robot with voice command

info:
  robot_type: Two-wheeled Mobile Indoor Robot
  application: Personal Home Robot

org:
  name: Mayfield Robotics
  link: http://www.mayfieldrobotics.com/

personal:
  role: Computer Vision Intern
  timeframe: June 2018 – August 2018

media:
- type: video
  src: https://www.youtube.com/embed/qvEZM-xi4Fs
  width: 800
  height: 450
  caption: 
    A demonstration of the person following feauture I implemented with an 
    integrated voice command.

- type: video 
  src: https://www.youtube.com/embed/JgrY1aPXASY
  width: 800
  height: 600
  caption:
    A visualization of the person tracker in rviz. Blue points near the
    tracked_person coordinate frame are particles from the particle filter;
    other points are 3D points from the depth sensor.

- type: image
  src: person_tracker_block.png
  caption: 
    Block diagram of the perception for the person follower.
    I implemented the Person Tracker section.

- type: image 
  src: person_tracker_telemetry.png
  caption: 
    Visualization of the robot telemetry in rviz. Blue points near the
    tracked_person coordinate frame are particles from the particle filter;
    other points are 3D points from the depth sensor.

---
