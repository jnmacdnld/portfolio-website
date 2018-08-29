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
machine logic. I focused almost all of energy on leading this project during my junior year of undergrad, save for
enough time to get decent grades in classes. Leading the software team was one the most challenging, if not the most
challenging, experience I have had thus far.

I emphasized early integration and system-level testing. Our team had
previously focused on task-level testing (such as, sorting of colored objects or shooting projectiles at targets). This lead to undiscovered 
failure modes when the vehicle executed sequences of tasks. One such failure mode, paired with an unduly strong
assuption about course setup, directly lead to a sub-par performance 
in the RoboSub 2016 Finals and our placing third rather than first. Obviously, it was my goal for the team to place first, so this sort of failure was not acceptable.

I viewed our secondary vehicle as crucial to our success. I saw that we had the
technical capability to fix every issue we had encoutered during testing, 
but were vulnerable to new issues which appeared late in the development cycle. 
By splitting tasks
between the subs and testing in paralell, this second "minisub"
would enable us to effectively double our testing time, greatly reducing the posibility of "unknown unknowns." Key to having a second vehicle was finding a way to do position estimation without an expensive sonar sensor, which was not possible on a second vehicle due to budget constraints. During the
fall, I spent time
researching how to build a visual odometry algorithm in
order to enable position estimation on our small vehicle. An
initial implementation worked well on indoor test data, but struggled
underwater, where patterns of dancing light from surface waves can cause false
motion. I continued reserach over the winter, but the problem persisted.

At the beginning of the spring, I assessed the situation and decided to de-scope positional estimation on the minisub, therefore shelving my visual odometry development. I decided we needed to 
focus on bringing the new vehicles into a state where the core vehicle
sensing and control was reliable and task-specific development could be reasonably
be carried out by our
software team members who would be staying over
the summer. We converged on a strategy in which our minisub would carry out
tasks which did not require position estimation, with our larger sub carring out
those that did, still enabling the benefits of a dual vehicle strategy while maintaining a resonable scope for our schedule. 

I therefore shifted from doing long-term research work to more short-term (6 month time horizon) work, and urged other team members to do the same. In one case, I had to de-scope a project to replace the vehicle operating system, which a team member strongly felt should be included. Trying to be delicate in this so as to balance the need for vehicle reliability and not discouraging innovation was the most challenging leadership decision I have ever made, and one which I did not take lightly. (It is now clear to me that had I not done this, the platform would not have been stable, and we would not have ultimately won the competition.) 

In particular, I focused on writing software to compensate
for noise in our acoustic sensors needed for pinger localization and increase the speed at which the vehicle tracked pingers by roughly a factor of ten. (I was able to due this using, suprsingly, single-linkage clustering of incoming data to differentiate the correct data from outliers, an approach which had worked in the past.) At the same
time, I coordinated and worked on cross-subteam fixes to deal with
minisub control instability caused by (1) our magentometer detecting 
electromagnetic interference from upgraded thrusters and
(2) forward thrusters which exterted too much torque about the vehicle
center of mass, creating roll and pitch moments which other thrusters were not able to counteract. A combination of fabricating mounts to move thrusters, modifying our Kalman filter, and ignoring our magentometer for sensor fusion solved the issue. 

With the work the team did over
the summer (which I can take zero credit for, as I was interning at iRobot during this time), we managed to place first in RoboSub 2017. We achieved a
semi-finals score which was higher than the next best team by a factor
of more than two (I believe the actual number was close to a factor of ten), which was truly incredible. I was incredibly priveleged to have such a great team. Seeing both vehicles working
flawlessly in paralell was a moment I will never forget. 
