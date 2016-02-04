<?php

/* partials/javascript-config.html.twig */
class __TwigTemplate_769894c3ac614ea632a4da809f9b657fd87d78f344a6a16e1309534bea7e976d extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<script type=\"text/javascript\">
    window.GravAdmin = window.GravAdmin || {};
    window.GravAdmin.config = {
        base_url_relative: '";
        // line 4
        echo (isset($context["base_url_relative"]) ? $context["base_url_relative"] : null);
        echo "',
        param_sep: '";
        // line 5
        echo $this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "system", array()), "param_sep", array());
        echo "',
        enable_auto_updates_check: '";
        // line 6
        echo $this->getAttribute($this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "plugins", array()), "admin", array()), "enable_auto_updates_check", array());
        echo "',
        admin_timeout: '";
        // line 7
        echo (($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "plugins", array()), "admin", array()), "session", array()), "timeout", array())) ? ($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "plugins", array()), "admin", array()), "session", array()), "timeout", array())) : (1800));
        echo "',
        admin_nonce: '";
        // line 8
        echo $this->getAttribute((isset($context["admin"]) ? $context["admin"] : null), "getNonce", array());
        echo "',
        pro_enabled: '";
        // line 9
        echo $this->getAttribute($this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "plugins", array()), "admin-pro", array(), "array"), "enabled", array());
        echo "'
    };
    window.GravAdmin.uri_params = {};

    ";
        // line 13
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute((isset($context["grav"]) ? $context["grav"] : null), "uri", array()), "params", array(0 => null, 1 => true), "method"));
        foreach ($context['_seq'] as $context["param"] => $context["value"]) {
            // line 14
            echo "        window.GravAdmin.uri_params.";
            echo $context["param"];
            echo " = \"";
            echo twig_replace_filter($context["value"], array("\\" => "/"));
            echo "\";
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['param'], $context['value'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 16
        echo "</script>
";
    }

    public function getTemplateName()
    {
        return "partials/javascript-config.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  66 => 16,  55 => 14,  51 => 13,  44 => 9,  40 => 8,  36 => 7,  32 => 6,  28 => 5,  24 => 4,  19 => 1,);
    }
}
/* <script type="text/javascript">*/
/*     window.GravAdmin = window.GravAdmin || {};*/
/*     window.GravAdmin.config = {*/
/*         base_url_relative: '{{ base_url_relative }}',*/
/*         param_sep: '{{ config.system.param_sep }}',*/
/*         enable_auto_updates_check: '{{ config.plugins.admin.enable_auto_updates_check }}',*/
/*         admin_timeout: '{{ config.plugins.admin.session.timeout ?: 1800 }}',*/
/*         admin_nonce: '{{ admin.getNonce }}',*/
/*         pro_enabled: '{{ config.plugins["admin-pro"].enabled }}'*/
/*     };*/
/*     window.GravAdmin.uri_params = {};*/
/* */
/*     {% for param, value in grav.uri.params(null, true) %}*/
/*         window.GravAdmin.uri_params.{{param}} = "{{value|replace({'\\': '/'})}}";*/
/*     {% endfor %}*/
/* </script>*/
/* */
