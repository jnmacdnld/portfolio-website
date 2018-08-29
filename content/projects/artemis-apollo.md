---
title: Artemis and Apollo
type: project
date: 2016-09-19T11:13:20+00:00

thumb: 
  description: Pair of fully autonomous underwater robots which placed first internationally in RoboSub 2017
  img: artemis_apollo_thumb.png

highlights: 
- Lead a team of 12 undergraduate students to develop software for a robotic submarine, acheving 1st place at the the 2017 International RoboSub competition, defeating 43 teams, including graduate students 
- Worked with team members to set high-level goals and coordinate efforts between individual software members and the wider electrical and mechanical teams to achieve those goals
- Wrote software for tracking of an acoustic beacon given the phase difference on arrival of the beacon signal between three recievers

org:
  name: Cornell University Autonomous Underwater Vehicle Team
  link: http://cuauv.org
  github: https://github.com/cuauv/software

info:
  robot_type: Pair of Mobile Underwater Robots
  application: International RoboSub 2017 Competition Entry (Won 1st place)

personal:
  role: Software Team Lead
  timeframe: September 2016 – September 2017

media:
- type: video 
  title: Competition Video
  width: 800
  height: 450
  src: https://www.youtube.com/embed/V-gOZzkITTU?rel=0

- type: video 
  title: Software Overview Video
  width: 800
  height: 600
  src: https://www.youtube.com/embed/Jfacv7x9poY

- type: video 
  title: Indoor Visual Odometry Demo
  width: 800
  height: 450
  src: https://www.youtube.com/embed/FRSd12OvMlI
  caption: 
      This is a demonstration of the visual odometery algorithm being tested 
      in an indoor environment. Movement of reflections and shadows from 
      waves on the surface of the water unfortunately limits the usefulness 
      of the algorithm underwater. 

---

After an exciting first year on the team, I was chosen to be one of the
two software team leads, overseeing 15 software team members developing
all of the software running on the main computer including that for vehicle
control, computer vision, acoustic localization, and high level state
machine logic. I emphasized early integration and system-level testing, as our team had
previously focused on task-level testing (such as, the "Torpedoes" task
or an object sorting task), leading to undiscovered 
failure modes when the vehicle executed sequences of RoboSub mission
challenges. (One such failure mode, paired with an unduly strong
assuption about course setup, directly lead to a sub-par performance 
in the RoboSub 2016 Finals and our placing third rather than first.)

Leading the software team was one the most challenging, if not the most
challenging, experience I have had thus far. 

I viewed our secondary vehicle as crucial to our success. By splitting tasks
between the subs and testing in paralell, this second "minisub"
would enable us to effectively double our testing time. During the
fall, I spent time
researching how to build a visual odometry algorithm in
order to enable position estimation on our small vehicle, which lacked
the sonar sensor traditionally required for underwater navigation. An
initial implementation worked well on indoor test data, but struggled
underwater, where patterns of dancing light from surface waves can cause false
motion.

During the spring, I shelved my visual odometry development in order to
focus on bringing the new vehicles into a state where the core vehicle
sensing and control was reliable and task-specific development could be reasonably
be carried out by our
software team members who would be staying over
the summer. We converged on a strategy in which our minisub would carry out
tasks which did not require position estimation, with our larger sub carring out
those that did. In particular, I focused on writing software to compensate
for noise in our acoustic sensors needed for pinger localization. At the same
time, I coordinated and worked on cross-subteam fixes to deal with
minisub control instability eaused by (1) our magentometer detecting 
EM from upgraded thrusters and
(2) forward thrusters which exterted too much torque about the vehicle
center of mass. With the work the team did over
the summer, we managed to place first in RoboSub 2017. We achieved a
semi-finals score which was higher than the next best team by a factor
of more than two, which was truly incredible. I was priveleged to have such a great team. Seeing both vehicles working
flawlessly in paralell was a moment I will never forget.      
