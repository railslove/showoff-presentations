This is a repository with Railslove presentations created using [showoff](https://github.com/schacon/showoff)

### How to create a new presentation

First you need to install showoff and all its depencies.

Then you run `showoff create presentationname` within the showoff-presentations directory.

After that you `cd` into your new presentation directory and run `../install_template.sh` which will create symbolic links to the assets in the `/template` folder.

Alternativly, to create a presentation with Railslove template, run `./create_with_template.sh presentationname`

### Start showoff presentation server in your presentation's directory
run `showoff serve`

### Railslove Template

Defaults:

* **Bullet list** default layout when composing a list.  
  [<img src="showoff-presentations/raw/master/template/readme-images/bulletpoints.png" width="200">](showoff-presentations/raw/master/template/readme-images/bulletpoints.png)
* **Title and Text** default layout when content has a title and text  
  [<img src="showoff-presentations/raw/master/template/readme-images/title-text.png" width="200">](showoff-presentations/raw/master/template/readme-images/title-text.png)

You can assign each slide a different style and style combinations.  
Available styles are:

* **opener** First slide with Raillove logo (any content is hidden)  
  [<img src="showoff-presentations/raw/master/template/readme-images/opener.png" width="200">](showoff-presentations/raw/master/template/readme-images/opener.png)
* **Agenda** special layout when composing a list. *It is recommended for this layout not to use a header, just use normal text as the title*  
  [<img src="showoff-presentations/raw/master/template/readme-images/agenda.png" width="200">](showoff-presentations/raw/master/template/readme-images/agenda.png)
* **callout** shows a callout/bubble  
  You can include one title (#) and one line of text. It can fit up to 3 lines of wrapped text  
  [<img src="showoff-presentations/raw/master/template/readme-images/callout-green.png" width="200">](showoff-presentations/raw/master/template/readme-images/callout-green.png)
  * **logo** combined with callout, the railslove logo is added below the callout  
    [<img src="showoff-presentations/raw/master/template/readme-images/callout-logo.png" width="200">](showoff-presentations/raw/master/template/readme-images/callout-logo.png)
  * supported background colors: (combined with callout)
      * **green** (default)  
        [<img src="showoff-presentations/raw/master/template/readme-images/callout-green.png" width="200">](showoff-presentations/raw/master/template/readme-images/callout-green.png)
      * **cyan**  
        [<img src="showoff-presentations/raw/master/template/readme-images/callout-cyan.png" width="200">](showoff-presentations/raw/master/template/readme-images/callout-cyan.png)
      * **lila**  
        [<img src="showoff-presentations/raw/master/template/readme-images/callout-lila.png" width="200">](showoff-presentations/raw/master/template/readme-images/callout-lila.png)
      * **orange** *(sample below includes logo too)*  
        [<img src="showoff-presentations/raw/master/template/readme-images/callout-orange-logo.png" width="200">](showoff-presentations/raw/master/template/readme-images/callout-orange-logo.png)
* **chapter-opener** green background with white text in the middle  
  [<img src="showoff-presentations/raw/master/template/readme-images/chapter-opener.png" width="200">](showoff-presentations/raw/master/template/readme-images/chapter-opener.png)
* **full-page-image** single image with caption automatically take from the image's alt attribute  
  [<img src="showoff-presentations/raw/master/template/readme-images/full-page-image.png" width="200">](showoff-presentations/raw/master/template/readme-images/full-page-image.png)
* **vertically-centered** Vertically centers the content of the slide overriding the default 120px top margin
* **style=margin-top:300px** adds custom css to the content of the slide, in this sample it adds a 300px top margin which overrides the default 120px

*P.S.: [test_new_template/one/01_slide.md](showoff-presentations/blob/master/test_new_template/one/01_slide.md) shows off these features in use*

### How to print (or save as PDF)

Works best in Safari.  
1. Press Alt + P, this will break the presentation and display all the slides in one page  
2. Print the page (Cmd + P), select landscape layout and check the *print backgrounds* option and uncheck the *print headers and footers* option.  
3. Print to actual paper or save as PDF ;)  
[<img src="showoff-presentations/raw/master/template/readme-images/safari-print.png" width="200">](showoff-presentations/raw/master/template/readme-images/safari-print.png)

### How to set a timer on a slide that automatically moves to the next slide

Add the following style to the slide: auto-advance-xxxx where xxxx is number of milliseconds to wait before automatically moving to the next slide


# How to deploy to heroku

In order for your showoff presentation to run on heroku, you need to add a `Gemfile` (+ `Gemfile.lock`) and a `config.ru` to your presentation directory.

Since you only want(need) to deploy only one presenation into one heroku app, you will need to copy the files into a different folder outside the `showoff-presentation` repo.

    cd ..
    mkdir smurf
    cp -vRLf showoff-presentations/smurf ./
    git init .
    git commit -m "something"
    heroku apps:create smurf --stack cedar
    git push heroku master

It's important that you use the `-L` switch when copying the files.  This makes sure that the symbolic links to the template assets are resolved.
