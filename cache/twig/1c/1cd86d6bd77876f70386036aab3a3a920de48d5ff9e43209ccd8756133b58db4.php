<?php

/* partials/dashboard-statistics.html.twig */
class __TwigTemplate_02b7e03d9ed9ae0bde5d73c47365ab6f08bcd81a033ae0865955af804325f844 extends Twig_Template
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
        if ($this->env->getExtension('GravTwigExtension')->authorize(array(0 => "admin.statistics", 1 => "admin.super"))) {
            // line 2
            echo "    <div id=\"popularity\" class=\"dashboard-item dashboard-right\">
        <div class=\"secondary-accent default-box-shadow\">
            <h1>";
            // line 4
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.STATISTICS");
            echo "</h1>
            <div class=\"ct-chart\"></div>
            <script>
                var data = {
                    labels: ";
            // line 8
            echo $this->getAttribute($this->getAttribute((isset($context["popularity"]) ? $context["popularity"] : null), "getDailyChartData", array()), "labels", array(), "array");
            echo ",
                    series: [
                        ";
            // line 10
            echo $this->getAttribute($this->getAttribute((isset($context["popularity"]) ? $context["popularity"] : null), "getDailyChartData", array()), "data", array(), "array");
            echo "
                    ]
                };
                var options = {
                    height: 164,
                    chartPadding: !isFirefox ? 5 : 25,

                    axisX: {
                        showGrid: false,
                        labelOffset: {
                            x: 0,
                            y: 5
                        }
                    },
                    axisY: {
                        offset: 15,
                        showLabel: true,
                        showGrid: true,
                        labelOffset: {
                            x: 5,
                            y: 5
                        },
                        scaleMinSpace: 20
                    }
                };
                Chartist.Bar('#popularity .ct-chart', data, options);
            </script>
            <div class=\"flush-bottom button-bar stats-bar\">
                <span class=\"stat\">
                    <b>";
            // line 39
            echo $this->getAttribute((isset($context["popularity"]) ? $context["popularity"] : null), "getDailyTotal", array());
            echo "</b>
                    <i>";
            // line 40
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.TODAY");
            echo "</i>
                </span>
                <span class=\"stat\">
                    <b>";
            // line 43
            echo $this->getAttribute((isset($context["popularity"]) ? $context["popularity"] : null), "getWeeklyTotal", array());
            echo "</b>
                    <i>";
            // line 44
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.WEEK");
            echo "</i>
                </span>
                <span class=\"stat\">
                    <b>";
            // line 47
            echo $this->getAttribute((isset($context["popularity"]) ? $context["popularity"] : null), "getMonthlyTotal", array());
            echo "</b>
                    <i>";
            // line 48
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.MONTH");
            echo "</i>
                </span>
            </div>
        </div>
    </div>
";
        }
    }

    public function getTemplateName()
    {
        return "partials/dashboard-statistics.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  93 => 48,  89 => 47,  83 => 44,  79 => 43,  73 => 40,  69 => 39,  37 => 10,  32 => 8,  25 => 4,  21 => 2,  19 => 1,);
    }
}
/* {% if authorize(['admin.statistics', 'admin.super']) %}*/
/*     <div id="popularity" class="dashboard-item dashboard-right">*/
/*         <div class="secondary-accent default-box-shadow">*/
/*             <h1>{{ "PLUGIN_ADMIN.STATISTICS"|tu }}</h1>*/
/*             <div class="ct-chart"></div>*/
/*             <script>*/
/*                 var data = {*/
/*                     labels: {{ popularity.getDailyChartData['labels'] }},*/
/*                     series: [*/
/*                         {{ popularity.getDailyChartData['data'] }}*/
/*                     ]*/
/*                 };*/
/*                 var options = {*/
/*                     height: 164,*/
/*                     chartPadding: !isFirefox ? 5 : 25,*/
/* */
/*                     axisX: {*/
/*                         showGrid: false,*/
/*                         labelOffset: {*/
/*                             x: 0,*/
/*                             y: 5*/
/*                         }*/
/*                     },*/
/*                     axisY: {*/
/*                         offset: 15,*/
/*                         showLabel: true,*/
/*                         showGrid: true,*/
/*                         labelOffset: {*/
/*                             x: 5,*/
/*                             y: 5*/
/*                         },*/
/*                         scaleMinSpace: 20*/
/*                     }*/
/*                 };*/
/*                 Chartist.Bar('#popularity .ct-chart', data, options);*/
/*             </script>*/
/*             <div class="flush-bottom button-bar stats-bar">*/
/*                 <span class="stat">*/
/*                     <b>{{ popularity.getDailyTotal }}</b>*/
/*                     <i>{{ "PLUGIN_ADMIN.TODAY"|tu }}</i>*/
/*                 </span>*/
/*                 <span class="stat">*/
/*                     <b>{{ popularity.getWeeklyTotal }}</b>*/
/*                     <i>{{ "PLUGIN_ADMIN.WEEK"|tu }}</i>*/
/*                 </span>*/
/*                 <span class="stat">*/
/*                     <b>{{ popularity.getMonthlyTotal }}</b>*/
/*                     <i>{{ "PLUGIN_ADMIN.MONTH"|tu }}</i>*/
/*                 </span>*/
/*             </div>*/
/*         </div>*/
/*     </div>*/
/* {% endif %}*/
