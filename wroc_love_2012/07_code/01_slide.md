!SLIDE callout lila

# Now the magic stuff comes

Code

!SLIDE

# Decouple

* Thin Models
* One "thing" needs a validation, a class method and 2 instance methods
* Put them all in a model?
* Use ActiveSupport::Concern for close proximity of methods that belong together
* Easier to test in isolation

!SLIDE

# Use POROs (Plain Old Ruby Objects)

* Rails is Ruby, after all
* Models don't have to be db abstractions
* If you find a group of methods belonging together, create a new class instead of a Concern

!SLIDE callout lila

# Know other 

Ruby frameworks

!SLIDE callout sk-red

# Rails isn't

the answer for every problem

!SLIDE

# Know other Ruby frameworks

* ...
* ...
* ...

!SLIDE

# Get your workflow right

* Don't write large routines
* Break up larger methods in smaller ones

!SLIDE callout

# Use a whiteboard

Think about what methods do, and if there is an easier way

!SLIDE callout sk-red

# An iPad3

isn't a whiteboard!

!SLIDE callout auto-advance-200

Write fast tests

<!-- !SLIDE

* You're test suite will get bigger and slower
* Don't write sloppy tests
* Factories are slow
* Use fixtures (and factories)
* Use mocks and stubs
* Only test very small parts of the application in unit tests
* Try Minitest::Spec instead of Rspec
 -->

!SLIDE callout auto-advance-200

Got it?

!SLIDE callout orange auto-advance-10

Write

!SLIDE callout cyan auto-advance-5

Fast

!SLIDE callout lila auto-advance-2

Tests

!SLIDE callout

Ok?