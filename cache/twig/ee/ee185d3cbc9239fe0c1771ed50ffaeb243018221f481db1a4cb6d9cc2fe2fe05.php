<?php

/* partials/dashboard-maintenance.html.twig */
class __TwigTemplate_f739177aac4c8e969440d4b019057d8963b257ec63c5c00cdebc30adad3f9600 extends Twig_Template
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
        $context["backup"] = $this->getAttribute((isset($context["admin"]) ? $context["admin"] : null), "lastBackup", array(), "method");
        // line 2
        echo "
";
        // line 3
        if ($this->env->getExtension('GravTwigExtension')->authorize(array(0 => "admin.maintenance", 1 => "admin.super"))) {
            // line 4
            echo "    <div id=\"updates\" class=\"dashboard-item dashboard-left\">
        <div class=\"tertiary-accent default-box-shadow\">
            <h1>";
            // line 6
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.MAINTENANCE");
            echo "</h1>
            <div class=\"admin-update-charts\">
                <div class=\"updates-chart\">
                    <div class=\"chart-wrapper\">
                        <div class=\"ct-chart\"></div>
                        <span class=\"numeric hidden\"><span>-</span><em>";
            // line 11
            echo twig_lower_filter($this->env, $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.UPDATED"));
            echo "</em></span>
                    </div>
                    <p class=\"js__updates-available-description\">&nbsp;</p>
                </div>
                <div class=\"backups-chart\">
                    <div class=\"chart-wrapper\">
                        <div class=\"ct-chart\"></div>
                        <script>
                            var data = {
                              series: [";
            // line 20
            echo $this->getAttribute((isset($context["backup"]) ? $context["backup"] : null), "chart_fill", array());
            echo ", ";
            echo $this->getAttribute((isset($context["backup"]) ? $context["backup"] : null), "chart_empty", array());
            echo "]
                            };
                            var options = {
                              donut: true,
                              donutWidth: 10,
                              startAngle: 0,
                              total: 100,
                              showLabel: false,
                              height: 150,
                              chartPadding: !isFirefox ? 5 : 10
                            };
                            Chartist.Pie('.backups-chart .ct-chart', data, options);
                        </script>
                        <span class=\"numeric\">";
            // line 33
            echo $this->getAttribute((isset($context["backup"]) ? $context["backup"] : null), "days", array());
            echo "<em>";
            echo twig_lower_filter($this->env, $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.DAYS"));
            echo "</em></span>
                    </div>
                    <p>";
            // line 35
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.LAST_BACKUP");
            echo "</p>
                </div>
            </div>
            <div class=\"flush-bottom button-bar\">
                <button data-maintenance-update=\"";
            // line 39
            echo $this->getAttribute((isset($context["uri"]) ? $context["uri"] : null), "addNonce", array(0 => ((((isset($context["base_url_relative"]) ? $context["base_url_relative"] : null) . "/update.json/task") . $this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "system", array()), "param_sep", array())) . "update"), 1 => "admin-form", 2 => "admin-nonce"), "method");
            echo "\" class=\"button\" style=\"display: none\"><i class=\"fa fa-cloud-download\"></i> ";
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.UPDATE");
            echo "</button>
                <button data-ajax=\"";
            // line 40
            echo $this->getAttribute((isset($context["uri"]) ? $context["uri"] : null), "addNonce", array(0 => ((((isset($context["base_url_relative"]) ? $context["base_url_relative"] : null) . "/backup.json/task") . $this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "system", array()), "param_sep", array())) . "backup"), 1 => "admin-form", 2 => "admin-nonce"), "method");
            echo "\" class=\"button\"><i class=\"fa fa-database\"></i> ";
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.BACKUP");
            echo "</button>
            </div>
        </div>
    </div>
";
        }
    }

    public function getTemplateName()
    {
        return "partials/dashboard-maintenance.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  88 => 40,  82 => 39,  75 => 35,  68 => 33,  50 => 20,  38 => 11,  30 => 6,  26 => 4,  24 => 3,  21 => 2,  19 => 1,);
    }
}
/* {% set backup = admin.lastBackup() %}*/
/* */
/* {% if authorize(['admin.maintenance', 'admin.super']) %}*/
/*     <div id="updates" class="dashboard-item dashboard-left">*/
/*         <div class="tertiary-accent default-box-shadow">*/
/*             <h1>{{ "PLUGIN_ADMIN.MAINTENANCE"|tu }}</h1>*/
/*             <div class="admin-update-charts">*/
/*                 <div class="updates-chart">*/
/*                     <div class="chart-wrapper">*/
/*                         <div class="ct-chart"></div>*/
/*                         <span class="numeric hidden"><span>-</span><em>{{ "PLUGIN_ADMIN.UPDATED"|tu|lower }}</em></span>*/
/*                     </div>*/
/*                     <p class="js__updates-available-description">&nbsp;</p>*/
/*                 </div>*/
/*                 <div class="backups-chart">*/
/*                     <div class="chart-wrapper">*/
/*                         <div class="ct-chart"></div>*/
/*                         <script>*/
/*                             var data = {*/
/*                               series: [{{ backup.chart_fill }}, {{ backup.chart_empty }}]*/
/*                             };*/
/*                             var options = {*/
/*                               donut: true,*/
/*                               donutWidth: 10,*/
/*                               startAngle: 0,*/
/*                               total: 100,*/
/*                               showLabel: false,*/
/*                               height: 150,*/
/*                               chartPadding: !isFirefox ? 5 : 10*/
/*                             };*/
/*                             Chartist.Pie('.backups-chart .ct-chart', data, options);*/
/*                         </script>*/
/*                         <span class="numeric">{{ backup.days }}<em>{{ "PLUGIN_ADMIN.DAYS"|tu|lower }}</em></span>*/
/*                     </div>*/
/*                     <p>{{ "PLUGIN_ADMIN.LAST_BACKUP"|tu }}</p>*/
/*                 </div>*/
/*             </div>*/
/*             <div class="flush-bottom button-bar">*/
/*                 <button data-maintenance-update="{{ uri.addNonce(base_url_relative ~ '/update.json/task' ~ config.system.param_sep ~ 'update', 'admin-form', 'admin-nonce') }}" class="button" style="display: none"><i class="fa fa-cloud-download"></i> {{ "PLUGIN_ADMIN.UPDATE"|tu }}</button>*/
/*                 <button data-ajax="{{ uri.addNonce(base_url_relative ~ '/backup.json/task' ~ config.system.param_sep ~ 'backup', 'admin-form', 'admin-nonce') }}" class="button"><i class="fa fa-database"></i> {{ "PLUGIN_ADMIN.BACKUP"|tu }}</button>*/
/*             </div>*/
/*         </div>*/
/*     </div>*/
/* {% endif %}*/
