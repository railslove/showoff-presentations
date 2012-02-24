!SLIDE

# Key organisation

* "activerecord.models"
* "actuverecird.xxx.attributes"
* "activerecord.errors"  >  http://guides.rubyonrails.org/i18n.html#error-message-interpolation
* models vs controllers+views


!SLIDE

# File organisation

* logically distribute your strings over multiple files:
  * defaults (time, date)
  * activerecord
  * models
  * controllers+views
  * emails
  * marketing, ...
* keep long texts out of your main files (make it more difficult to work with those files)

!SLIDE

# Dicitionaries: .yml vs. .rb

You may use YAML (.yml) or plain Ruby (.rb) files for storing your translations in SimpleStore. YAML is the preferred option among Rails developers. However, it has one big disadvantage. YAML is very sensitive to whitespace and special characters, so the application may not load your dictionary properly. Ruby files will crash your application on first request, so you may easily find what’s wrong. (If you encounter any “weird issues” with YAML dictionaries, try putting the relevant portion of your dictionary into a Ruby file.)

!SLIDE

# Markup in i18n strings

      # config/locales/en.yml
      en:
        welcome: <b>welcome!</b>
        hello_html: <b>hello!</b>
        title:
          html: <b>title!</b>
       
      # app/views/home/index.html.erb
      <div><%= t('welcome') %></div>
      <div><%= raw t('welcome') %></div>
      <div><%= t('hello_html') %></div>
      <div><%= t('title.html') %></div>

Markdown, Textile

Using sparingly! Beware of your translators!!!!