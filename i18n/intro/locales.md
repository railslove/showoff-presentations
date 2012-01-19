!SLIDE
# rails i18n & WTI #


!SLIDE
# Locales #

e.g. “en”, “de”, “en-US”, “de-DE”, “de-CH”

Rails uses 2 letter locales ???

    @@@ ruby
    I18n.locale
    config.i18n.default_locale

The default locale is :en and all translations from `config/locales/*.rb,yml` are auto loaded
