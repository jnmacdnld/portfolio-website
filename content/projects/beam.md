---
title: Beam
type: project
date: 2017-09-00T11:13:20+00:00

thumb:
  description: Enhanced BeamPro telepresence robot used as a research platform for socially competent navigation
  img: beam_thumb.png

highlights:
- Transformed the novel Social Momentum algorithm from equations and MatLab simulations to Python code running in real-time on a BeamPro robot with ROS Kinetic, enabling navigation with socially desirable collision avoidance behaviors
- Designed and implemented framework for socially aware navigation algorithms, enabling future comparison of arbitrary algorithms including OCRA, Social Force, and Social Momentum running in real-time on a robot   
- Paper on comparison of social navigation algorithms using the framework accepted to HRI 2019

info:
  robot_type: Two-Wheeled Mobile Indoor Robot
  application: Research platform for socially competent navigation

org:
  link: http://rpal.cs.cornell.edu
  name: Cornell University Robotic Personal Assistants Lab
  github: https://github.com/Cornell-RPAL

personal: 
  role: Undergraduate Research Assistant
  timeframe: September 2017 – May 2018

media:
- type: image
  src: beam_robot_2.jpeg
  caption: 
    The robot consists of a BeamPro telepresence robot, an Occam Stereo for 360
    stereo vision, a forward and read Hokuyo lidar sensors for obstacle avoidance
    and navigation, and a chest-level forward facing lidar for 2D to 3D
    correspondence during people tracking. An externally mounted Alienware 15
    laptop running ROS Kinetic and equipped with a NVIDIA GTX 1080 GPU is used as
    the main computer.

- type: image 
  src: beam_map_overhead.png 
  caption: Overhead view in rviz of the map created by gmapping using a Hokuyo lidar sensor.

- type: image 
  src: beam_map_3d.png
  caption: 
    3d view in rviz of a different mapping run. The colored scans from the
    multiple lidar sensors (chassis forward, chassis rear, and chest) are more
    easily distinguishable.     The chest-height lidar is used for 2D to 3D
    correspondence for the people tracker.
---

I spent my senior year of undergrad working in the Robotic Personal Asisstants
Lab on the socially competent navigation project. My role was to move the
project from a set of simulations running in Matlab to Python code running on a
ROS robot in real-time. I designed and implemented an architecure which enabled 
modular swapping of 
different person perception and social navigation algorithms in order to gauge
real-world performance. 

In order to compare a range on algorithms, some which
assumed certain motion constraints and some which did not, we converged on 
defining the action which an algorithm
would take as an arbitrary velocity vector, which the framework would convert
into wheel velocities using a feedback linearization approach. Additional
constraints e.g. velocity magnitude constraint could be enforced by the
framework
in order to suit the platform being used.

I also implemented the lab's novel Social Momentum algorithm inside this
framework, as well as Optimal Reciprocal Collision Avoidance (ORCA) using the RVO library in order to demonstrate the
interopability of the framework, as well as to enable comparison between
different algorithms.

The social navigation framework which I designed and implemented was used to
conduct experiments on social navigation, the results of which were summarised
in a paper accepted to HRI 2019.
