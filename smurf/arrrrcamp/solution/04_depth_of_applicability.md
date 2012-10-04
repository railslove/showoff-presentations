!SLIDE callout

3) Stop the cascade!


!SLIDE bullets incremental

# What do I mean by that? #

* **Cascading** applicability
* -> obviously a key feature of CSS
* -> allows selectors to apply to a large part of a document
* Example:
<li>
  <pre class="sh_css sh_sourceCode"><code><span class="sh_selector">#main</span><span class="sh_symbol">-</span>container p</code></pre>
</li>
* applies to **all** paragraphs within the #main-container



!SLIDE bullets incremental

# Cascading applicability: #

    @@@ CSS
    #main-container p

* Can enable pretty elegant things with very little code
* BUT
* Also has a lot of negative side effects:
  - -> Increased complexity
  - -> Uncertainty about source of styles
  - -> Can lead to performance problems
* _____________________________
* => We need some safe guards!
* (Especially for larger team projects)



!SLIDE bullets incremental

# Example: Controlling appicability and writing modular CSS #

<ul>
  <li>
    Very, very bad:
    <pre class="sh_css sh_sourceCode"><code><span class="sh_selector">#main</span><span class="sh_symbol">-</span>container a</code></pre>
  </li>
  <li>
    Little better, but with tight coupling:
    <pre class="sh_css sh_sourceCode"><code><span class="sh_selector">#main</span><span class="sh_symbol">-</span>container <span class="sh_symbol">&gt;</span> a</code></pre>
  </li>
  <li>
    Decent:
    <pre class="sh_css sh_sourceCode"><code><span class="sh_selector">.main</span><span class="sh_symbol">-</span>container <span class="sh_selector">.link</span></code></pre>
  </li>
  <li>
    Ultimum modularity:
    <pre class="sh_css sh_sourceCode"><code><span class="sh_selector">.main</span><span class="sh_symbol">-</span>container <span class="sh_selector">.main</span><span class="sh_symbol">-</span>container<span class="sh_symbol">--</span>link</code></pre>
  </li>
</ul>

.notes Who can tell me what the problem is in this (the first) example?


