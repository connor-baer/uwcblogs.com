<?php

/* dashboard.html.twig */
class __TwigTemplate_8a0436ac1f13af6bce8add8db289326915eaafedb97b9406f0ef8ee2c5556124 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("partials/base.html.twig", "dashboard.html.twig", 1);
        $this->blocks = array(
            'titlebar' => array($this, 'block_titlebar'),
            'messages' => array($this, 'block_messages'),
            'content_top' => array($this, 'block_content_top'),
            'content' => array($this, 'block_content'),
            'content_bottom' => array($this, 'block_content_bottom'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "partials/base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 3
        $context["title"] = $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.DASHBOARD");
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 5
    public function block_titlebar($context, array $blocks = array())
    {
        // line 6
        echo "    <div class=\"button-bar\">
        ";
        // line 7
        if ($this->env->getExtension('GravTwigExtension')->authorize(array(0 => "admin.maintenance", 1 => "admin.super"))) {
            // line 8
            echo "            <div class=\"button-group\">
                <button data-clear-cache=\"";
            // line 9
            echo $this->getAttribute((isset($context["uri"]) ? $context["uri"] : null), "addNonce", array(0 => ((((isset($context["base_url_relative"]) ? $context["base_url_relative"] : null) . "/cache.json/task") . $this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "system", array()), "param_sep", array())) . "clearCache"), 1 => "admin-form", 2 => "admin-nonce"), "method");
            echo "\" class=\"button\"><i class=\"fa fa-trash\"></i> ";
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.CLEAR_CACHE");
            echo "</button>
                <button type=\"button\" class=\"button dropdown-toggle\" data-toggle=\"dropdown\">
                    <i class=\"fa fa-caret-down\"></i>
                </button>
                <ul class=\"dropdown-menu\">
                    <li><a data-clear-cache=\"";
            // line 14
            echo $this->getAttribute((isset($context["uri"]) ? $context["uri"] : null), "addNonce", array(0 => ((((((isset($context["base_url_relative"]) ? $context["base_url_relative"] : null) . "/cache.json/task") . $this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "system", array()), "param_sep", array())) . "clearCache/cleartype") . $this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "system", array()), "param_sep", array())) . "all"), 1 => "admin-form", 2 => "admin-nonce"), "method");
            echo "\" href=\"#\">";
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.CLEAR_CACHE_ALL_CACHE");
            echo "</a></li>
                    <li><a data-clear-cache=\"";
            // line 15
            echo $this->getAttribute((isset($context["uri"]) ? $context["uri"] : null), "addNonce", array(0 => ((((((isset($context["base_url_relative"]) ? $context["base_url_relative"] : null) . "/cache.json/task") . $this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "system", array()), "param_sep", array())) . "clearCache/cleartype") . $this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "system", array()), "param_sep", array())) . "assets-only"), 1 => "admin-form", 2 => "admin-nonce"), "method");
            echo "\" href=\"#\">";
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.CLEAR_CACHE_ASSETS_ONLY");
            echo "</a></li>
                    <li><a data-clear-cache=\"";
            // line 16
            echo $this->getAttribute((isset($context["uri"]) ? $context["uri"] : null), "addNonce", array(0 => ((((((isset($context["base_url_relative"]) ? $context["base_url_relative"] : null) . "/cache.json/task") . $this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "system", array()), "param_sep", array())) . "clearCache/cleartype") . $this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "system", array()), "param_sep", array())) . "images-only"), 1 => "admin-form", 2 => "admin-nonce"), "method");
            echo "\" href=\"#\">";
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.CLEAR_CACHE_IMAGES_ONLY");
            echo "</a></li>
                    <li><a data-clear-cache=\"";
            // line 17
            echo $this->getAttribute((isset($context["uri"]) ? $context["uri"] : null), "addNonce", array(0 => ((((((isset($context["base_url_relative"]) ? $context["base_url_relative"] : null) . "/cache.json/task") . $this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "system", array()), "param_sep", array())) . "clearCache/cleartype") . $this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "system", array()), "param_sep", array())) . "cache-only"), 1 => "admin-form", 2 => "admin-nonce"), "method");
            echo "\" href=\"#\">";
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.CLEAR_CACHE_CACHE_ONLY");
            echo "</a></li>
                </ul>
            </div>

            <button data-gpm-checkupdates=\"\" class=\"button\"><i class=\"fa fa-refresh\"></i> ";
            // line 21
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.CHECK_FOR_UPDATES");
            echo "</button>
        ";
        }
        // line 23
        echo "    </div>
    <h1><i class=\"fa fa-fw fa-th\"></i> ";
        // line 24
        echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.DASHBOARD");
        echo "</h1>
";
    }

    // line 27
    public function block_messages($context, array $blocks = array())
    {
    }

    // line 29
    public function block_content_top($context, array $blocks = array())
    {
        // line 30
        echo "    <div id=\"admin-dashboard\">
        ";
        // line 31
        if ($this->getAttribute($this->getAttribute((isset($context["grav"]) ? $context["grav"] : null), "twig", array()), "plugins_hooked_dashboard_widgets_top", array())) {
            // line 32
            echo "            ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute((isset($context["grav"]) ? $context["grav"] : null), "twig", array()), "plugins_hooked_dashboard_widgets_top", array()));
            $context['loop'] = array(
              'parent' => $context['_parent'],
              'index0' => 0,
              'index'  => 1,
              'first'  => true,
            );
            if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
                $length = count($context['_seq']);
                $context['loop']['revindex0'] = $length - 1;
                $context['loop']['revindex'] = $length;
                $context['loop']['length'] = $length;
                $context['loop']['last'] = 1 === $length;
            }
            foreach ($context['_seq'] as $context["_key"] => $context["widget"]) {
                // line 33
                echo "                ";
                $this->loadTemplate((("partials/" . $this->getAttribute($context["widget"], "template", array())) . ".html.twig"), "dashboard.html.twig", 33)->display($context);
                // line 34
                echo "            ";
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
                if (isset($context['loop']['length'])) {
                    --$context['loop']['revindex0'];
                    --$context['loop']['revindex'];
                    $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['widget'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 35
            echo "        ";
        }
        // line 36
        echo "    </div>
";
    }

    // line 39
    public function block_content($context, array $blocks = array())
    {
        // line 40
        echo "    ";
        $this->loadTemplate("partials/messages.html.twig", "dashboard.html.twig", 40)->display($context);
        // line 41
        echo "
    ";
        // line 42
        if ($this->getAttribute($this->getAttribute((isset($context["grav"]) ? $context["grav"] : null), "twig", array()), "plugins_hooked_dashboard_widgets_main", array())) {
            // line 43
            echo "        ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute((isset($context["grav"]) ? $context["grav"] : null), "twig", array()), "plugins_hooked_dashboard_widgets_main", array()));
            $context['loop'] = array(
              'parent' => $context['_parent'],
              'index0' => 0,
              'index'  => 1,
              'first'  => true,
            );
            if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
                $length = count($context['_seq']);
                $context['loop']['revindex0'] = $length - 1;
                $context['loop']['revindex'] = $length;
                $context['loop']['length'] = $length;
                $context['loop']['last'] = 1 === $length;
            }
            foreach ($context['_seq'] as $context["_key"] => $context["widget"]) {
                // line 44
                echo "            ";
                $this->loadTemplate((("partials/" . $this->getAttribute($context["widget"], "template", array())) . ".html.twig"), "dashboard.html.twig", 44)->display($context);
                // line 45
                echo "        ";
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
                if (isset($context['loop']['length'])) {
                    --$context['loop']['revindex0'];
                    --$context['loop']['revindex'];
                    $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['widget'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 46
            echo "    ";
        }
    }

    // line 49
    public function block_content_bottom($context, array $blocks = array())
    {
        // line 50
        echo "    <div id=\"admin-dashboard\">
        ";
        // line 51
        if ($this->getAttribute($this->getAttribute((isset($context["grav"]) ? $context["grav"] : null), "twig", array()), "plugins_hooked_dashboard_widgets_bottom", array())) {
            // line 52
            echo "            ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute((isset($context["grav"]) ? $context["grav"] : null), "twig", array()), "plugins_hooked_dashboard_widgets_bottom", array()));
            $context['loop'] = array(
              'parent' => $context['_parent'],
              'index0' => 0,
              'index'  => 1,
              'first'  => true,
            );
            if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
                $length = count($context['_seq']);
                $context['loop']['revindex0'] = $length - 1;
                $context['loop']['revindex'] = $length;
                $context['loop']['length'] = $length;
                $context['loop']['last'] = 1 === $length;
            }
            foreach ($context['_seq'] as $context["_key"] => $context["widget"]) {
                // line 53
                echo "                ";
                $this->loadTemplate((("partials/" . $this->getAttribute($context["widget"], "template", array())) . ".html.twig"), "dashboard.html.twig", 53)->display($context);
                // line 54
                echo "            ";
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
                if (isset($context['loop']['length'])) {
                    --$context['loop']['revindex0'];
                    --$context['loop']['revindex'];
                    $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['widget'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 55
            echo "        ";
        }
        // line 56
        echo "    </div>
";
    }

    public function getTemplateName()
    {
        return "dashboard.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  250 => 56,  247 => 55,  233 => 54,  230 => 53,  212 => 52,  210 => 51,  207 => 50,  204 => 49,  199 => 46,  185 => 45,  182 => 44,  164 => 43,  162 => 42,  159 => 41,  156 => 40,  153 => 39,  148 => 36,  145 => 35,  131 => 34,  128 => 33,  110 => 32,  108 => 31,  105 => 30,  102 => 29,  97 => 27,  91 => 24,  88 => 23,  83 => 21,  74 => 17,  68 => 16,  62 => 15,  56 => 14,  46 => 9,  43 => 8,  41 => 7,  38 => 6,  35 => 5,  31 => 1,  29 => 3,  11 => 1,);
    }
}
/* {% extends 'partials/base.html.twig' %}*/
/* */
/* {% set title = "PLUGIN_ADMIN.DASHBOARD"|tu %}*/
/* */
/* {% block titlebar %}*/
/*     <div class="button-bar">*/
/*         {% if authorize(['admin.maintenance', 'admin.super']) %}*/
/*             <div class="button-group">*/
/*                 <button data-clear-cache="{{ uri.addNonce(base_url_relative ~ '/cache.json/task' ~ config.system.param_sep ~ 'clearCache', 'admin-form', 'admin-nonce') }}" class="button"><i class="fa fa-trash"></i> {{ "PLUGIN_ADMIN.CLEAR_CACHE"|tu }}</button>*/
/*                 <button type="button" class="button dropdown-toggle" data-toggle="dropdown">*/
/*                     <i class="fa fa-caret-down"></i>*/
/*                 </button>*/
/*                 <ul class="dropdown-menu">*/
/*                     <li><a data-clear-cache="{{ uri.addNonce(base_url_relative ~ '/cache.json/task' ~ config.system.param_sep ~ 'clearCache/cleartype' ~ config.system.param_sep ~ 'all', 'admin-form', 'admin-nonce') }}" href="#">{{ "PLUGIN_ADMIN.CLEAR_CACHE_ALL_CACHE"|tu }}</a></li>*/
/*                     <li><a data-clear-cache="{{ uri.addNonce(base_url_relative ~ '/cache.json/task' ~ config.system.param_sep ~ 'clearCache/cleartype' ~ config.system.param_sep ~ 'assets-only', 'admin-form', 'admin-nonce') }}" href="#">{{ "PLUGIN_ADMIN.CLEAR_CACHE_ASSETS_ONLY"|tu }}</a></li>*/
/*                     <li><a data-clear-cache="{{ uri.addNonce(base_url_relative ~ '/cache.json/task' ~ config.system.param_sep ~ 'clearCache/cleartype' ~ config.system.param_sep ~ 'images-only', 'admin-form', 'admin-nonce') }}" href="#">{{ "PLUGIN_ADMIN.CLEAR_CACHE_IMAGES_ONLY"|tu }}</a></li>*/
/*                     <li><a data-clear-cache="{{ uri.addNonce(base_url_relative ~ '/cache.json/task' ~ config.system.param_sep ~ 'clearCache/cleartype' ~ config.system.param_sep ~ 'cache-only', 'admin-form', 'admin-nonce') }}" href="#">{{ "PLUGIN_ADMIN.CLEAR_CACHE_CACHE_ONLY"|tu }}</a></li>*/
/*                 </ul>*/
/*             </div>*/
/* */
/*             <button data-gpm-checkupdates="" class="button"><i class="fa fa-refresh"></i> {{ "PLUGIN_ADMIN.CHECK_FOR_UPDATES"|tu }}</button>*/
/*         {% endif %}*/
/*     </div>*/
/*     <h1><i class="fa fa-fw fa-th"></i> {{ "PLUGIN_ADMIN.DASHBOARD"|tu }}</h1>*/
/* {% endblock %}*/
/* */
/* {% block messages %}{% endblock %}*/
/* */
/* {% block content_top %}*/
/*     <div id="admin-dashboard">*/
/*         {% if grav.twig.plugins_hooked_dashboard_widgets_top %}*/
/*             {% for widget in grav.twig.plugins_hooked_dashboard_widgets_top %}*/
/*                 {% include 'partials/' ~ widget.template ~ '.html.twig' %}*/
/*             {% endfor %}*/
/*         {% endif %}*/
/*     </div>*/
/* {% endblock %}*/
/* */
/* {% block content %}*/
/*     {% include 'partials/messages.html.twig' %}*/
/* */
/*     {% if grav.twig.plugins_hooked_dashboard_widgets_main %}*/
/*         {% for widget in grav.twig.plugins_hooked_dashboard_widgets_main %}*/
/*             {% include 'partials/' ~ widget.template ~ '.html.twig' %}*/
/*         {% endfor %}*/
/*     {% endif %}*/
/* {% endblock %}*/
/* */
/* {% block content_bottom %}*/
/*     <div id="admin-dashboard">*/
/*         {% if grav.twig.plugins_hooked_dashboard_widgets_bottom %}*/
/*             {% for widget in grav.twig.plugins_hooked_dashboard_widgets_bottom %}*/
/*                 {% include 'partials/' ~ widget.template ~ '.html.twig' %}*/
/*             {% endfor %}*/
/*         {% endif %}*/
/*     </div>*/
/* {% endblock %}*/
/* */
