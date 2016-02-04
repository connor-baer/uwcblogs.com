<?php

/* partials/dashboard-pages.html.twig */
class __TwigTemplate_1521f7f9372ba8de730e1ac3a220c9be36d02f1e5e78642407cf8692654b8556 extends Twig_Template
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
        if ($this->env->getExtension('GravTwigExtension')->authorize(array(0 => "admin.pages", 1 => "admin.super"))) {
            // line 2
            echo "    <div id=\"latest\">
        <div class=\"button-bar\">
            <a class=\"button\" href=\"";
            // line 4
            echo $this->getAttribute((isset($context["uri"]) ? $context["uri"] : null), "route", array(0 => true), "method");
            echo "/pages\"><i class=\"fa fa-fw fa-file-text-o\"></i>";
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.MANAGE_PAGES");
            echo "</a>
        </div>
        <h1>";
            // line 6
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.LATEST_PAGE_UPDATES");
            echo "</h1>
        <table>
        ";
            // line 8
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["admin"]) ? $context["admin"] : null), "latestPages", array()));
            foreach ($context['_seq'] as $context["_key"] => $context["latest"]) {
                if ($this->getAttribute((isset($context["admin"]) ? $context["admin"] : null), "latestPages", array())) {
                    // line 9
                    echo "            <tr><td class=\"double page-title\"><a href=\"";
                    echo (isset($context["base_url"]) ? $context["base_url"] : null);
                    echo "/pages/";
                    echo trim($this->getAttribute($context["latest"], "route", array()), "/");
                    echo "\"><i class=\"fa fa-fw fa-file-o\"></i> ";
                    echo $this->getAttribute($context["latest"], "title", array());
                    echo "</a></td><td class=\"double page-route\">";
                    echo $this->getAttribute($context["latest"], "route", array());
                    echo "</td><td><b class=\"last-modified\">";
                    echo $this->env->getExtension('GravTwigExtension')->nicetimeFilter($this->getAttribute($context["latest"], "modified", array()));
                    echo "</b></td></tr>
        ";
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['latest'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 11
            echo "        </table>
    </div>
";
        } else {
            // line 14
            echo "    <div class=\"padding\">You don't have sufficient access to view the dashboard...</div>
";
        }
    }

    public function getTemplateName()
    {
        return "partials/dashboard-pages.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  65 => 14,  60 => 11,  42 => 9,  37 => 8,  32 => 6,  25 => 4,  21 => 2,  19 => 1,);
    }
}
/* {% if authorize(['admin.pages', 'admin.super']) %}*/
/*     <div id="latest">*/
/*         <div class="button-bar">*/
/*             <a class="button" href="{{ uri.route(true) }}/pages"><i class="fa fa-fw fa-file-text-o"></i>{{ "PLUGIN_ADMIN.MANAGE_PAGES"|tu }}</a>*/
/*         </div>*/
/*         <h1>{{ "PLUGIN_ADMIN.LATEST_PAGE_UPDATES"|tu }}</h1>*/
/*         <table>*/
/*         {% for latest in admin.latestPages if admin.latestPages %}*/
/*             <tr><td class="double page-title"><a href="{{ base_url }}/pages/{{ latest.route|trim('/') }}"><i class="fa fa-fw fa-file-o"></i> {{ latest.title }}</a></td><td class="double page-route">{{ latest.route }}</td><td><b class="last-modified">{{ latest.modified|nicetime }}</b></td></tr>*/
/*         {% endfor %}*/
/*         </table>*/
/*     </div>*/
/* {% else %}*/
/*     <div class="padding">You don't have sufficient access to view the dashboard...</div>*/
/* {% endif %}*/
