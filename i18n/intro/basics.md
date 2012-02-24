!SLIDE
# Internationalisation

!SLIDE
# Localization


!SLIDE
# What is a locale?

= The different languages/regions that the app is localized for

For pragmatic reasons, Rails differentiates only 2 letter locales (=> languages): "en", "de"

If you alos need to differentiate regions within a language (e.g. "en-US" vs. "en-GB"), you need change this default.


!SLIDE
# Date, Time, etc.



!SLIDE
# Anatomy of a localized string?

Pair of a uniquely identifying *key* and the string *value* for the different locales

In Rails:

    "en.activerecord.posts.title": "Title"
    "de.activerecord.posts.title": "Überschrift"

    I18n.locale = :en
    puts I18n.t("activerecord.posts.title")
    "Title"




!SLIDE
# Interpolation variables

   "common.user_salutation": "Welcome, %{user_name}!"
   t("common.user_salutation", :user_name => "John Doe")
   "Welcome, John Doe!"

!SLIDE
# Plural strings

  "datetime.distance_in_words.x_days"
    "one":   "%{count} day"
    "other": "%{count} days"

  t("datetime.distance_in_words.x_days", :count => 1)  => "1 day"
  t("datetime.distance_in_words.x_days", :count => 99) => "99 days"
  t("datetime.distance_in_words.x_days", :count => 0)  => "0 days"



!SLIDE
# Rails i18n

    @@@ ruby
    I18n.locale
    config.i18n.default_locale

The default locale is :en and all translations from `config/locales/*.rb,yml` are auto loaded
