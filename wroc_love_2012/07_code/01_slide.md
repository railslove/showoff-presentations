!SLIDE callout lila

Code

!SLIDE

# Decouple

* Don't let your models get too fat
* One "thing" needs a validation, a class method and 2 instance methods
* Put them all in a model?
* Use ActiveSupport::Concern for close proximity of methods that belong together
* Easier to test in isolation

!SLIDE

# Use POROs (Plain Old Ruby Objects)

* Rails is Ruby, after all
* Models don't have to be db abstractions
* If you find a group of methods belonging together, create a new class instead of a Concern

!SLIDE

# Get your workflow right

* Don't write large routines
* Break up larger methods in smaller ones
* Think about what methods do, and if there is an easier way (e.g. use a whiteboard)

!SLIDE

# Write fast tests

* You're test suite will get bigger and slower
* Don't write sloppy tests
* Factories are slow
* Use fixtures (and factories)
* Use mocks and stubs
* Only test very small parts of the application in unit tests
* Try Minitest::Spec instead of Rspec
