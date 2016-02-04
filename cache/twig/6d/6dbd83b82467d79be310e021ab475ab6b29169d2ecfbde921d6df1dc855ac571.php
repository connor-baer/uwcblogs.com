<?php

/* partials/base.html.twig */
class __TwigTemplate_11f8d7a3bf26153869e7ac4774929b07d9dc29f1599713edf0b6f051a6cf1af3 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'head' => array($this, 'block_head'),
            'stylesheets' => array($this, 'block_stylesheets'),
            'javascripts' => array($this, 'block_javascripts'),
            'page' => array($this, 'block_page'),
            'navigation' => array($this, 'block_navigation'),
            'titlebar' => array($this, 'block_titlebar'),
            'messages' => array($this, 'block_messages'),
            'content_top' => array($this, 'block_content_top'),
            'content' => array($this, 'block_content'),
            'content_bottom' => array($this, 'block_content_bottom'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<html lang=\"en\">
<head>
";
        // line 4
        $this->displayBlock('head', $context, $blocks);
        // line 68
        echo "</head>
<body ";
        // line 69
        if ( !$this->getAttribute($this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "plugins", array()), "admin", array()), "google_fonts", array())) {
            echo "class=\"simple-fonts\"";
        }
        echo ">
    ";
        // line 70
        $this->displayBlock('page', $context, $blocks);
        // line 108
        echo "</body>
</html>
";
    }

    // line 4
    public function block_head($context, array $blocks = array())
    {
        // line 5
        echo "    <meta charset=\"utf-8\" />
    <title>";
        // line 6
        if ((isset($context["title"]) ? $context["title"] : null)) {
            echo (isset($context["title"]) ? $context["title"] : null);
            echo " | ";
        } else {
            if ($this->getAttribute((isset($context["header"]) ? $context["header"] : null), "title", array())) {
                echo $this->getAttribute((isset($context["header"]) ? $context["header"] : null), "title", array());
                echo " | ";
            }
        }
        echo $this->getAttribute((isset($context["site"]) ? $context["site"] : null), "title", array());
        echo "</title>
    ";
        // line 7
        if ($this->getAttribute((isset($context["header"]) ? $context["header"] : null), "description", array())) {
            // line 8
            echo "        <meta name=\"description\" content=\"";
            echo $this->getAttribute((isset($context["header"]) ? $context["header"] : null), "description", array());
            echo "\">
    ";
        } else {
            // line 10
            echo "        <meta name=\"description\" content=\"";
            echo $this->getAttribute((isset($context["site"]) ? $context["site"] : null), "description", array());
            echo "\">
    ";
        }
        // line 12
        echo "    ";
        if ($this->getAttribute((isset($context["header"]) ? $context["header"] : null), "robots", array())) {
            // line 13
            echo "        <meta name=\"robots\" content=\"";
            echo $this->getAttribute((isset($context["header"]) ? $context["header"] : null), "robots", array());
            echo "\">
    ";
        }
        // line 15
        echo "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <link rel=\"icon\" type=\"image/png\" href=\"";
        // line 16
        echo (isset($context["base_url_simple"]) ? $context["base_url_simple"] : null);
        echo (isset($context["theme_url"]) ? $context["theme_url"] : null);
        echo "/images/favicon.png\">

    ";
        // line 18
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 34
        echo "
    ";
        // line 35
        $this->loadTemplate("partials/javascript-config.html.twig", "partials/base.html.twig", 35)->display($context);
        // line 36
        echo "    ";
        $this->displayBlock('javascripts', $context, $blocks);
    }

    // line 18
    public function block_stylesheets($context, array $blocks = array())
    {
        // line 19
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addCss", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/css-compiled/nucleus.css")), "method");
        // line 20
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addCss", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/css-compiled/template.css")), "method");
        // line 21
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addCss", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/css/font-awesome.min.css")), "method");
        // line 22
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addCss", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/css/chartist.min.css")), "method");
        // line 23
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addCss", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/css/selectize.min.css")), "method");
        // line 24
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addCss", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/css/hint.base.min.css")), "method");
        // line 25
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addCss", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/css/datepicker/kendo.common.core.min.css")), "method");
        // line 26
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addCss", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/css/datepicker/kendo.flat.min.css")), "method");
        // line 27
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addCss", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/css/datepicker/grav.overrides.css")), "method");
        // line 28
        echo "        ";
        if (((($this->getAttribute((isset($context["browser"]) ? $context["browser"] : null), "getBrowser", array()) == "msie") && ($this->getAttribute((isset($context["browser"]) ? $context["browser"] : null), "getVersion", array()) >= 8)) && ($this->getAttribute((isset($context["browser"]) ? $context["browser"] : null), "getVersion", array()) <= 9))) {
            // line 29
            echo "            ";
            $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addCss", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/css/nucleus-ie9.css")), "method");
            // line 30
            echo "            ";
            $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addCss", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/css/pure-0.5.0/grids-min.css")), "method");
            // line 31
            echo "        ";
        }
        // line 32
        echo "        ";
        echo $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "css", array(), "method");
        echo "
    ";
    }

    // line 36
    public function block_javascripts($context, array $blocks = array())
    {
        // line 37
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "add", array(0 => "jquery", 1 => 101), "method");
        // line 38
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/js/modernizr.custom.71422.js")), "method");
        // line 39
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/js/chartist.min.js")), "method");
        // line 40
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/js/selectize.min.js")), "method");
        // line 41
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJS", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/js/sortable.min.js")), "method");
        // line 42
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/js/toastr.min.js")), "method");
        // line 43
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/js/jquery.remodal.min.js")), "method");
        // line 44
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/js/ajax.js")), "method");
        // line 45
        echo "
        ";
        // line 46
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/js/admin-all.js")), "method");
        // line 47
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/js/dropdown.js")), "method");
        // line 48
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/js/mobile.js")), "method");
        // line 49
        echo "
        ";
        // line 50
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/js/datepicker/kendo.custom.min.js")), "method");
        // line 51
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/js/datepicker/init.js")), "method");
        // line 52
        echo "
        ";
        // line 53
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/js/forms/form.js")), "method");
        // line 54
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/js/forms/fields/input.js")), "method");
        // line 55
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/js/forms/fields/array.js")), "method");
        // line 56
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/js/forms/fields/selectize.js")), "method");
        // line 57
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/js/forms/fields/checkboxes.js")), "method");
        // line 58
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/js/forms/fields/toggle.js")), "method");
        // line 59
        echo "        ";
        $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/js/forms.js")), "method");
        // line 60
        echo "
        ";
        // line 61
        if ((($this->getAttribute((isset($context["browser"]) ? $context["browser"] : null), "getBrowser", array()) == "msie") || ($this->getAttribute((isset($context["browser"]) ? $context["browser"] : null), "getBrowser", array()) == "edge"))) {
            // line 62
            echo "            ";
            $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "addJs", array(0 => ((isset($context["theme_url"]) ? $context["theme_url"] : null) . "/js/form-attr.polyfill.js")), "method");
            // line 63
            echo "        ";
        }
        // line 64
        echo "
        ";
        // line 65
        echo $this->getAttribute((isset($context["assets"]) ? $context["assets"] : null), "js", array(), "method");
        echo "
    ";
    }

    // line 70
    public function block_page($context, array $blocks = array())
    {
        // line 71
        echo "    <div class=\"remodal-bg\">

        ";
        // line 73
        $this->displayBlock('navigation', $context, $blocks);
        // line 76
        echo "
        <section id=\"admin-main\" >
            <div id=\"titlebar\" class=\"titlebar secondary-accent\">
                ";
        // line 79
        $this->displayBlock('titlebar', $context, $blocks);
        // line 80
        echo "            </div>

            <div class=\"grav-update\" data-gpm-grav>
            </div>

            <div class=\"content-padding\">
                <div>
                    ";
        // line 87
        $this->displayBlock('messages', $context, $blocks);
        // line 90
        echo "                    ";
        $this->displayBlock('content_top', $context, $blocks);
        // line 91
        echo "                    <div class=\"admin-block default-box-shadow\">
                        ";
        // line 92
        $this->displayBlock('content', $context, $blocks);
        // line 93
        echo "                    </div>
                    ";
        // line 94
        if ($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "plugins", array()), "admin", array()), "show_github_msg", array())) {
            // line 95
            echo "                    <div class=\"notice alert\"><i class=\"fa fa-github\"></i> <a href=\"https://github.com/getgrav/grav-plugin-admin/issues\" target=\"_blank\">";
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.ADMIN_REPORT_ISSUE");
            echo "</a></div>
                    ";
        }
        // line 97
        echo "                    ";
        $this->displayBlock('content_bottom', $context, $blocks);
        // line 98
        echo "                </div>
                 <footer id=\"footer\">
                    <a href=\"http://getgrav.org\">Grav</a> ";
        // line 100
        echo twig_lower_filter($this->env, $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.VERSION"));
        echo " <span class=\"grav-version\">";
        echo twig_constant("GRAV_VERSION");
        echo "</span> ";
        echo twig_lower_filter($this->env, $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.WAS_MADE_WITH"));
        echo " <i class=\"fa fa-heart\"></i> ";
        echo twig_lower_filter($this->env, $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.BY"));
        echo " <a href=\"http://www.rockettheme.com\">RocketTheme</a>.
                </footer>
            </div>

        </section>
        <div id='overlay'></div>
    </div>
    ";
    }

    // line 73
    public function block_navigation($context, array $blocks = array())
    {
        // line 74
        echo "            ";
        $this->loadTemplate("partials/nav.html.twig", "partials/base.html.twig", 74)->display($context);
        // line 75
        echo "        ";
    }

    // line 79
    public function block_titlebar($context, array $blocks = array())
    {
    }

    // line 87
    public function block_messages($context, array $blocks = array())
    {
        // line 88
        echo "                    ";
        $this->loadTemplate("partials/messages.html.twig", "partials/base.html.twig", 88)->display($context);
        // line 89
        echo "                    ";
    }

    // line 90
    public function block_content_top($context, array $blocks = array())
    {
    }

    // line 92
    public function block_content($context, array $blocks = array())
    {
    }

    // line 97
    public function block_content_bottom($context, array $blocks = array())
    {
    }

    public function getTemplateName()
    {
        return "partials/base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  360 => 97,  355 => 92,  350 => 90,  346 => 89,  343 => 88,  340 => 87,  335 => 79,  331 => 75,  328 => 74,  325 => 73,  307 => 100,  303 => 98,  300 => 97,  294 => 95,  292 => 94,  289 => 93,  287 => 92,  284 => 91,  281 => 90,  279 => 87,  270 => 80,  268 => 79,  263 => 76,  261 => 73,  257 => 71,  254 => 70,  248 => 65,  245 => 64,  242 => 63,  239 => 62,  237 => 61,  234 => 60,  231 => 59,  228 => 58,  225 => 57,  222 => 56,  219 => 55,  216 => 54,  214 => 53,  211 => 52,  208 => 51,  206 => 50,  203 => 49,  200 => 48,  197 => 47,  195 => 46,  192 => 45,  189 => 44,  186 => 43,  183 => 42,  180 => 41,  177 => 40,  174 => 39,  171 => 38,  168 => 37,  165 => 36,  158 => 32,  155 => 31,  152 => 30,  149 => 29,  146 => 28,  143 => 27,  140 => 26,  137 => 25,  134 => 24,  131 => 23,  128 => 22,  125 => 21,  122 => 20,  119 => 19,  116 => 18,  111 => 36,  109 => 35,  106 => 34,  104 => 18,  98 => 16,  95 => 15,  89 => 13,  86 => 12,  80 => 10,  74 => 8,  72 => 7,  59 => 6,  56 => 5,  53 => 4,  47 => 108,  45 => 70,  39 => 69,  36 => 68,  34 => 4,  29 => 1,);
    }
}
/* <!DOCTYPE html>*/
/* <html lang="en">*/
/* <head>*/
/* {% block head %}*/
/*     <meta charset="utf-8" />*/
/*     <title>{% if title %}{{ title }} | {% else %}{% if header.title %}{{ header.title }} | {% endif %}{% endif %}{{ site.title }}</title>*/
/*     {% if header.description %}*/
/*         <meta name="description" content="{{ header.description }}">*/
/*     {% else %}*/
/*         <meta name="description" content="{{ site.description }}">*/
/*     {% endif %}*/
/*     {% if header.robots %}*/
/*         <meta name="robots" content="{{ header.robots }}">*/
/*     {% endif %}*/
/*     <meta name="viewport" content="width=device-width, initial-scale=1.0">*/
/*     <link rel="icon" type="image/png" href="{{ base_url_simple }}{{ theme_url }}/images/favicon.png">*/
/* */
/*     {% block stylesheets %}*/
/*         {% do assets.addCss(theme_url~'/css-compiled/nucleus.css') %}*/
/*         {% do assets.addCss(theme_url~'/css-compiled/template.css') %}*/
/*         {% do assets.addCss(theme_url~'/css/font-awesome.min.css') %}*/
/*         {% do assets.addCss(theme_url~'/css/chartist.min.css') %}*/
/*         {% do assets.addCss(theme_url~'/css/selectize.min.css') %}*/
/*         {% do assets.addCss(theme_url~'/css/hint.base.min.css') %}*/
/*         {% do assets.addCss(theme_url~'/css/datepicker/kendo.common.core.min.css') %}*/
/*         {% do assets.addCss(theme_url~'/css/datepicker/kendo.flat.min.css') %}*/
/*         {% do assets.addCss(theme_url~'/css/datepicker/grav.overrides.css') %}*/
/*         {% if browser.getBrowser == 'msie' and browser.getVersion >= 8 and browser.getVersion <= 9 %}*/
/*             {% do assets.addCss(theme_url~'/css/nucleus-ie9.css') %}*/
/*             {% do assets.addCss(theme_url~'/css/pure-0.5.0/grids-min.css') %}*/
/*         {% endif %}*/
/*         {{ assets.css() }}*/
/*     {% endblock %}*/
/* */
/*     {% include 'partials/javascript-config.html.twig' %}*/
/*     {% block javascripts %}*/
/*         {% do assets.add('jquery',101) %}*/
/*         {% do assets.addJs(theme_url~'/js/modernizr.custom.71422.js') %}*/
/*         {% do assets.addJs(theme_url~'/js/chartist.min.js') %}*/
/*         {% do assets.addJs(theme_url~'/js/selectize.min.js') %}*/
/*         {% do assets.addJS(theme_url~'/js/sortable.min.js') %}*/
/*         {% do assets.addJs(theme_url~'/js/toastr.min.js') %}*/
/*         {% do assets.addJs(theme_url~'/js/jquery.remodal.min.js') %}*/
/*         {% do assets.addJs(theme_url~'/js/ajax.js') %}*/
/* */
/*         {% do assets.addJs(theme_url~'/js/admin-all.js') %}*/
/*         {% do assets.addJs(theme_url~'/js/dropdown.js') %}*/
/*         {% do assets.addJs(theme_url~'/js/mobile.js') %}*/
/* */
/*         {% do assets.addJs(theme_url~'/js/datepicker/kendo.custom.min.js') %}*/
/*         {% do assets.addJs(theme_url~'/js/datepicker/init.js') %}*/
/* */
/*         {% do assets.addJs(theme_url~'/js/forms/form.js') %}*/
/*         {% do assets.addJs(theme_url~'/js/forms/fields/input.js') %}*/
/*         {% do assets.addJs(theme_url~'/js/forms/fields/array.js') %}*/
/*         {% do assets.addJs(theme_url~'/js/forms/fields/selectize.js') %}*/
/*         {% do assets.addJs(theme_url~'/js/forms/fields/checkboxes.js') %}*/
/*         {% do assets.addJs(theme_url~'/js/forms/fields/toggle.js') %}*/
/*         {% do assets.addJs(theme_url~'/js/forms.js') %}*/
/* */
/*         {% if browser.getBrowser == 'msie' or browser.getBrowser == 'edge' %}*/
/*             {% do assets.addJs(theme_url~'/js/form-attr.polyfill.js') %}*/
/*         {% endif %}*/
/* */
/*         {{ assets.js() }}*/
/*     {% endblock %}*/
/* {% endblock %}*/
/* </head>*/
/* <body {% if not config.plugins.admin.google_fonts %}class="simple-fonts"{% endif %}>*/
/*     {% block page %}*/
/*     <div class="remodal-bg">*/
/* */
/*         {% block navigation %}*/
/*             {% include 'partials/nav.html.twig' %}*/
/*         {% endblock %}*/
/* */
/*         <section id="admin-main" >*/
/*             <div id="titlebar" class="titlebar secondary-accent">*/
/*                 {% block titlebar %}{% endblock %}*/
/*             </div>*/
/* */
/*             <div class="grav-update" data-gpm-grav>*/
/*             </div>*/
/* */
/*             <div class="content-padding">*/
/*                 <div>*/
/*                     {% block messages %}*/
/*                     {% include 'partials/messages.html.twig' %}*/
/*                     {% endblock %}*/
/*                     {% block content_top %}{% endblock %}*/
/*                     <div class="admin-block default-box-shadow">*/
/*                         {% block content %}{% endblock %}*/
/*                     </div>*/
/*                     {% if config.plugins.admin.show_github_msg %}*/
/*                     <div class="notice alert"><i class="fa fa-github"></i> <a href="https://github.com/getgrav/grav-plugin-admin/issues" target="_blank">{{ 'PLUGIN_ADMIN.ADMIN_REPORT_ISSUE'|tu }}</a></div>*/
/*                     {% endif %}*/
/*                     {% block content_bottom %}{% endblock %}*/
/*                 </div>*/
/*                  <footer id="footer">*/
/*                     <a href="http://getgrav.org">Grav</a> {{ "PLUGIN_ADMIN.VERSION"|tu|lower }} <span class="grav-version">{{ constant('GRAV_VERSION') }}</span> {{ "PLUGIN_ADMIN.WAS_MADE_WITH"|tu|lower }} <i class="fa fa-heart"></i> {{ "PLUGIN_ADMIN.BY"|tu|lower }} <a href="http://www.rockettheme.com">RocketTheme</a>.*/
/*                 </footer>*/
/*             </div>*/
/* */
/*         </section>*/
/*         <div id='overlay'></div>*/
/*     </div>*/
/*     {% endblock page %}*/
/* </body>*/
/* </html>*/
/* */
