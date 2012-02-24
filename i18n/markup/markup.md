!SLIDE bullets incremental

# The ultimate (i18n) problem: #

* "But we also need to internationalize structured text!"

* e.g. Emails, formatted text (bold, italic, paragraphs, headline) ...

* now the problems really start


!SLIDE bullets incremental

# An example for miscommunication between developers & translators: #

* This is the i18n string the developer adds:

* `en.common.salutation: "Welcome, %{user_name}!"`

* This is what is getting translated:

* `de.common.salutation: "Willkommen, %{benutzer_name}!"`

* :-(


!SLIDE bullets incremental

# Structured text #

* There are several technical solutions:

* - I18n keys postfixed with "_html" are rendered as HTML

* `hello.world_html: "Hello <strong>World</strong>"`

* - Markdown

* - Textile

* But again, it's not a technical but a social challenge