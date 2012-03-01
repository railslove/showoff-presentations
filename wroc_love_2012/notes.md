# Get out of the trap!

*Ralph von der Heyden, Georg Leciejewski and Jan Kus*


## Abstract

In our talk we share some of the most interesting, absurd, or funny insights
and moments we experienced in our past couple of years. As developers and
business founders, we present the best of our own mistakes and show you how we
got out of the pits we fell into. Believe us, we’ve been there as well and,
hopefully, attending our talk will help you not making the mistakes we already
made for you ;) It will be serious fun! The talk will cover both technical and
other subjects.




## Presentation Script

### About us

* Introduction of each of the speakers
* Educational background, previous companies etc.
* We have done this…
  * Picture of a sailboat with crew, everyone works together successfully
  * Successful software projects
  * Good coordination
  * Satisfied customers
* But we have also done this… (in a small way)
  * Picture of half-sunken Italian yacht
  * Software projects gone bad
  * Ill communication between developers or customers
* Over time, we found some ways to avoid (2) and have (1) instead
  * It's easy, but takes discipline
  * It all sounds logical
  * You probably know (some of) this
  * But listen, rinse and repeat! It's *so* easy to forget sometimes


### Body debt

#### What is it?

* We need our bodies to get work done
* We mostly work with our minds, but the mind is a part of the body, too
* For the mind to work well, the body must be in good shape
* Not treating the body right leads to a mortgage that has to be paid back


#### Stressful projects

* Stressing out the body, b/c of customer complaints, deadlines etc.
* Be open, be realistic, don't over-promise and under-deliver
* Avoid customers that stress you out, there are plenty of other jobs/customers
* Don't put more work in a week than your body can take
* If you have to stress you out for some days or even weeks:
  * Reserve more time for recovery
  * e.g. fewer tickets for the next sprint
* Will help against burn out and you will think about your work in a positive way


#### Sleep right

* Sleep is needed for recovery
* Sometimes we wake up full of energy, sometimes not. Why?
* Determine if you are a lark or an owl
  * What time would you get up and go to sleep if you were entirely free to plan your day?
  * Lark: Wake at 6am, sleep at 9 to 10 pm
  * Owl: Wake at 8 to 9 am, go to bet at midnight or 1 am
* Stick to your sleep cycle (Wakemate etc.)
* Nap
  * Mammals are programmed for 2 periods of intense sleepiness
  * Consolidating sleep in 1 large sleepiness is not as recovering as 2 periods
  * Short naps can help
  * Lark: 1 or 1:30 pm, Owl: 2:30 or 3 pm
  * You cannot work "full steam" during your midday wave of drowsiness
  * So you can as well take a nap
  * Ideal length: 20 (light sleep) to 45 (including REM) minutes
  * Eye shades to protect your eyes from light
  * Headphones with white noise agains noise
  * Enjoy the energy boost after the nap
* Will help you stay focussed during most of your work time


#### Activity

* 30 minutes of activity a day help against
  * Depression
  * Obesity
  * High blood pressure
  * …
* Start slowly
* Will help you stay healthy, live longer and feel well in your body


#### Eat right
* You're diet is important
* An apple a day keeps the doctor away
* If you want to lose weight: Do it slowly.
* Will help you stay healthy, live longer and feel well in your body


### Draw inspiration from other arts

* Get a hobby
* Be inspired by how other people solve problems
* Stepping back will help you see the whole picture
* Will help you find solutions that others don't see


### Learn your tools

#### debugger

* Invaluable tool
* Much easier than using puts-statements and the like
* Avoids the common change source, run request/test cycle
* Will help you find bugs in the source code quicker


#### Shell

* Try zsh, if you like, or stick with bash
* Try oh-my-zsh or bash-it
* Functions like {fast,fasdfas}
* Learn about processes
  * How to suspend
  * How to resume
  * Especially useful in server sessions
  * e.g. suspend vim/irb, run shell command, resume vim/irb
* Will help you work more efficiently on servers and your computer


#### screen/tmux

* Terminal multiplexer
* More than 1 shell session in a window (e.g. over ssh)
* screen: available on almost all servers
* tmux: more powerful/customizable
* Will help you work more efficiently on servers and your computer



### Deployment

#### Design for failure

* What happens if any third party service fails?
* E.g. Github, Rubygems, currency conversion providers…
* Don't let third parties break your deployment


#### Automate everything

* Tagging/Asset compilation/Job Queue restarts
* A new developer should be able to deploy after a < 5 min. introduction
* Will help you avoid dull routing work and mistakes done during "by hand" process


### Server setup

* Automation, automation, automation
* Throw away your shell script mess (if you have any)
* Learn chef (variants: chef-solo or little-chef) or puppet
  * Structure
  * Use code from other people
  * Reuse code on different OS
* also serves as documentation
* keep your recipes updated!
* Will help you when the day will come when you will need a new server *fast*


### Backups

* Set up a backup and restore process
* Monitor backups
* Test the restore process
* After some time: Test the restore process again
* Find parts that are cumbersome or don't work
* Will help you recover quickly after disaster


### Monitoring

* Know your servers
* Low level monitoring: RAM/CPU/disk usage
* Graph most important metrics (e.g. Ganglia)
* Use your log files (e.g. Greylog2)
* Use a service like Newrelic
* Use a service like Hoptoad
* Will help you see potential problems and upcoming disasters


### Code

#### Decouple

* Don't let your models get too fat
* One "thing" needs a validation, a class method and 2 instance methods
* Put them all in a model?
* Use ActiveSupport::Concern for close proximity of methods that belong together
* Easier to test in isolation


#### Use POROs (Plain Old Ruby Objects)

* Rails is Ruby, after all
* Models don't have to be db abstractions
* If you find a group of methods belonging together, create a new class instead of a Concern


#### Get your workflow right

* Don't write large routines
* Break up larger methods in smaller ones
* Think about what methods do, and if there is an easier way (e.g. use a whiteboard)


#### Write fast tests

* You're test suite will get bigger and slower
* Don't write sloppy tests
* Factories are slow
* Use fixtures (and factories)
* Use mocks and stubs
* Only test very small parts of the application in unit tests
* Try Minitest::Spec instead of Rspec


### Get better

#### Pair all the time you get the chance to

* Exhausting
* Take breaks, but not too long
* Leads to better code
* Leads to better programmers


#### Coworking

* Find pairs online or in your local user group
* Go coworking


#### Use stackoverflow and the like

* Problem example: Calculate age from day of birth
* Global community
* Someone else probably had you problem before
* Help others, if you found an alternative/better solution
* Get feedback, find potential problems in your solution


#### Go to your local user group

* There's always much to learn
* Ask other people how they would solve you current problem
* As soon as you find something interesting, teach


#### Hacker pursuit

* go go go