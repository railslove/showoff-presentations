!SLIDE callout

2) The "semantic" markup myth


!SLIDE bullets incremental

# The "Semantic" markup myth #

* The myth goes as follows:
* Don't use many classes, just use the "correct" "semantic" HTML markup and everything will be awesome
* And you can nicely reuse that structure for our CSS

!SLIDE

# "Semantic" markup & CSS #

    @@@ html
    <article>
      <section>
        <h3>Title</h3>
      </section>
    </article>

-

    @@@ css
    article
      section
        h3
          font-weight: bold
          ...

.notes Everything is not aweseom yet,  we still don't have SkyNet even though we use semantic HTML


!SLIDE bullets incremental

# Problems #

* **1) "Semantic" markup is overrated**
* Who really "reads"/"understands" this stuff?
* It can be a means to and end sometimes
* But it's never an end in itself
* **2) Creates tight coupling between HTML & CSS**
* **3) Too limited for real design**
* => we still need classes

.notes Also bad for CSS performance


