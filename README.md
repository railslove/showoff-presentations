This is a repository with Railslove presentations created using [showoff](https://github.com/schacon/showoff)

### How to create a new presentation

First you need to install showoff and all its depencies.

Then you run `showoff create presentationname` within the showoff-presentations directory.

After that you `cd` into your new presentation directory and run `../install_template.sh` which will create symbolic links to the assets in the `/template` folder.

### Start showoff presentation server
run `showoff serve`

### Use Raillove styles in your slides
You can assign each slide different style and style combinations.

Available styles are:

* **opener** First slide with Raillove logo (any content is hidden)  
  [<img src="showoff-presentations/raw/master/template/readme-images/opener.png" width="200">](showoff-presentations/raw/master/template/readme-images/opener.png)
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
      * **orange**  
        [<img src="showoff-presentations/raw/master/template/readme-images/callout-orange-logo.png" width="200">](showoff-presentations/raw/master/template/readme-images/callout-orange-logo.png)
* **chapter-opener** green background with white text in the middle  
  [<img src="showoff-presentations/raw/master/template/readme-images/chapter-opener.png" width="200">](showoff-presentations/raw/master/template/readme-images/chapter-opener.png)
* **full-page-image** single image with caption automatically take from the image's alt attribute  
  [<img src="showoff-presentations/raw/master/template/readme-images/full-page-image.png" width="200">](showoff-presentations/raw/master/template/readme-images/full-page-image.png)