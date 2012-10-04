!SLIDE callout

1) Stop using IDs in your CSS!


!SLIDE bullets incremental

# Use classes instead of IDs! #

* (in your CSS)

* Who here already knows and follows this rule?

.notes For those who don't know, or who need a refresher, the reason for this rule lies in CSS specificty.

* Reason: CSS specificity

* CSS specificity = Which CSS rule takes precedence over another?

.notes And in order to understand CSS specificity, you need to use inception .... *pause*



!SLIDE full-page-image

![CSS specificity explained using the movie Inception](inception.jpg)


.notes the basic plot is, that there a mulitple levels of realities/dream realities and in order to change/influence something in one reality you need to always go one level deeper

.notes And it's exactly the same thing with CSS


!SLIDE inception_collapsing bullets incremental

# CSS specificity dream levels #

.notes the specificity calculation is actually a lot more complicated, but it can generally be understood in terms of different levels

* (simplification)
* element selectors <code>a, h2, ...</code>
* class selectors <code>.link, .headline, ...</code>
* ID selectors <code>#home-link, #page-headline, ...</code>
* inline CSS
* <code>!important</code>



!SLIDE full-page-image

![So, you better stick to the first levels!](inception_collapsing.jpg)

