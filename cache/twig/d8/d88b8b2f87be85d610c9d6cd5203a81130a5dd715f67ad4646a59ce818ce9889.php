<?php

/* forms/field.html.twig */
class __TwigTemplate_9803c487e2028a5dbeb7abb803c81c58581f5931ecd85fa44aad6bbae255563c extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'field' => array($this, 'block_field'),
            'contents' => array($this, 'block_contents'),
            'label' => array($this, 'block_label'),
            'global_attributes' => array($this, 'block_global_attributes'),
            'group' => array($this, 'block_group'),
            'input' => array($this, 'block_input'),
            'input_attributes' => array($this, 'block_input_attributes'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        $context["originalValue"] = ((array_key_exists("originalValue", $context)) ? ((isset($context["originalValue"]) ? $context["originalValue"] : null)) : ((isset($context["value"]) ? $context["value"] : null)));
        // line 2
        $context["value"] = (((null === (isset($context["value"]) ? $context["value"] : null))) ? ($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "default", array())) : ((isset($context["value"]) ? $context["value"] : null)));
        // line 3
        $context["vertical"] = ($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "style", array()) == "vertical");
        // line 4
        echo "
";
        // line 5
        if (($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "yaml", array()) && twig_test_iterable((isset($context["value"]) ? $context["value"] : null)))) {
            // line 6
            echo "    ";
            $context["value"] = $this->env->getExtension('AdminTwigExtension')->toYamlFilter((isset($context["value"]) ? $context["value"] : null));
        }
        // line 8
        echo "
";
        // line 9
        $this->displayBlock('field', $context, $blocks);
    }

    public function block_field($context, array $blocks = array())
    {
        // line 10
        echo "    <div class=\"form-field grid";
        if ((isset($context["vertical"]) ? $context["vertical"] : null)) {
            echo " vertical";
        }
        echo "\">
        ";
        // line 11
        $this->displayBlock('contents', $context, $blocks);
        // line 71
        echo "    </div>
";
    }

    // line 11
    public function block_contents($context, array $blocks = array())
    {
        // line 12
        echo "            <div class=\"form-label";
        if ( !(isset($context["vertical"]) ? $context["vertical"] : null)) {
            echo " block size-1-3";
        }
        echo "\">
                ";
        // line 13
        if ($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "toggleable", array())) {
            // line 14
            echo "                    <span class=\"checkboxes toggleable\" data-grav-field=\"toggleable\" data-grav-field-name=\"";
            echo $this->env->getExtension('GravTwigExtension')->fieldNameFilter($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "name", array()));
            echo "\">
                        <input type=\"checkbox\"
                               id=\"toggleable_";
            // line 16
            echo $this->getAttribute((isset($context["field"]) ? $context["field"] : null), "name", array());
            echo "\"
                               ";
            // line 17
            if (( !(null === (isset($context["originalValue"]) ? $context["originalValue"] : null)) &&  !twig_test_empty((isset($context["originalValue"]) ? $context["originalValue"] : null)))) {
                echo "value=\"1\"";
            }
            // line 18
            echo "                               name=\"toggleable_";
            echo $this->env->getExtension('GravTwigExtension')->fieldNameFilter(((isset($context["scope"]) ? $context["scope"] : null) . $this->getAttribute((isset($context["field"]) ? $context["field"] : null), "name", array())));
            echo "\"
                               ";
            // line 19
            if (( !(null === (isset($context["originalValue"]) ? $context["originalValue"] : null)) &&  !twig_test_empty((isset($context["originalValue"]) ? $context["originalValue"] : null)))) {
                echo "checked=\"checked\"";
            }
            // line 20
            echo "                        >
                        <label for=\"toggleable_";
            // line 21
            echo $this->getAttribute((isset($context["field"]) ? $context["field"] : null), "name", array());
            echo "\"></label>
                    </span>
                ";
        }
        // line 24
        echo "                <label class=\"";
        echo (($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "toggleable", array())) ? ("toggleable") : (""));
        echo "\">
                ";
        // line 25
        $this->displayBlock('label', $context, $blocks);
        // line 33
        echo "                </label>
            </div>
            <div class=\"form-data";
        // line 35
        if ( !(isset($context["vertical"]) ? $context["vertical"] : null)) {
            echo " block size-2-3";
        }
        echo "\"
                ";
        // line 36
        $this->displayBlock('global_attributes', $context, $blocks);
        // line 41
        echo "            >
                ";
        // line 42
        $this->displayBlock('group', $context, $blocks);
        // line 69
        echo "            </div>
        ";
    }

    // line 25
    public function block_label($context, array $blocks = array())
    {
        // line 26
        echo "                    ";
        if ($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "help", array())) {
            // line 27
            echo "                    <span class=\"hint--bottom\" data-hint=\"";
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter(twig_escape_filter($this->env, $this->getAttribute((isset($context["field"]) ? $context["field"] : null), "help", array())));
            echo "\">";
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "label", array()));
            echo "</span>
                    ";
        } else {
            // line 29
            echo "                    ";
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "label", array()));
            echo "
                    ";
        }
        // line 31
        echo "                    ";
        echo ((twig_in_filter($this->getAttribute($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "validate", array()), "required", array()), array(0 => "on", 1 => "true", 2 => 1))) ? ("<span class=\"required\">*</span>") : (""));
        echo "
                ";
    }

    // line 36
    public function block_global_attributes($context, array $blocks = array())
    {
        // line 37
        echo "                data-grav-field=\"";
        echo $this->getAttribute((isset($context["field"]) ? $context["field"] : null), "type", array());
        echo "\"
                data-grav-disabled=\"";
        // line 38
        echo (((null === (isset($context["originalValue"]) ? $context["originalValue"] : null))) ? ("true") : ("false"));
        echo "\"
                data-grav-default=\"";
        // line 39
        echo twig_escape_filter($this->env, twig_jsonencode_filter($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "default", array())), "html_attr");
        echo "\"
                ";
    }

    // line 42
    public function block_group($context, array $blocks = array())
    {
        // line 43
        echo "                    ";
        $this->displayBlock('input', $context, $blocks);
        // line 68
        echo "                ";
    }

    // line 43
    public function block_input($context, array $blocks = array())
    {
        // line 44
        echo "                        <div class=\"form-input-wrapper ";
        echo $this->getAttribute((isset($context["field"]) ? $context["field"] : null), "size", array());
        echo "\">
                            <input
                                ";
        // line 47
        echo "                                name=\"";
        echo $this->env->getExtension('GravTwigExtension')->fieldNameFilter(((isset($context["scope"]) ? $context["scope"] : null) . $this->getAttribute((isset($context["field"]) ? $context["field"] : null), "name", array())));
        echo "\"
                                value=\"";
        // line 48
        echo twig_join_filter(twig_escape_filter($this->env, (isset($context["value"]) ? $context["value"] : null), "html_attr"), ", ");
        echo "\"
                                ";
        // line 50
        echo "                                ";
        $this->displayBlock('input_attributes', $context, $blocks);
        // line 65
        echo "                                />
                        </div>
                    ";
    }

    // line 50
    public function block_input_attributes($context, array $blocks = array())
    {
        // line 51
        echo "                                    ";
        if ($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "classes", array(), "any", true, true)) {
            echo "class=\"";
            echo $this->getAttribute((isset($context["field"]) ? $context["field"] : null), "classes", array());
            echo "\" ";
        }
        // line 52
        echo "                                    ";
        if ($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "id", array(), "any", true, true)) {
            echo "id=\"";
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["field"]) ? $context["field"] : null), "id", array()));
            echo "\" ";
        }
        // line 53
        echo "                                    ";
        if ($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "style", array(), "any", true, true)) {
            echo "style=\"";
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["field"]) ? $context["field"] : null), "style", array()));
            echo "\" ";
        }
        // line 54
        echo "                                    ";
        if ($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "disabled", array())) {
            echo "disabled=\"disabled\"";
        }
        // line 55
        echo "                                    ";
        if ($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "placeholder", array())) {
            echo "placeholder=\"";
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "placeholder", array()));
            echo "\"";
        }
        // line 56
        echo "                                    ";
        if (twig_in_filter($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "autofocus", array()), array(0 => "on", 1 => "true", 2 => 1))) {
            echo "autofocus=\"autofocus\"";
        }
        // line 57
        echo "                                    ";
        if (twig_in_filter($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "novalidate", array()), array(0 => "on", 1 => "true", 2 => 1))) {
            echo "novalidate=\"novalidate\"";
        }
        // line 58
        echo "                                    ";
        if (twig_in_filter($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "readonly", array()), array(0 => "on", 1 => "true", 2 => 1))) {
            echo "readonly=\"readonly\"";
        }
        // line 59
        echo "                                    ";
        if (twig_in_filter($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "autocomplete", array()), array(0 => "on", 1 => "off"))) {
            echo "autocomplete=\"";
            echo $this->getAttribute((isset($context["field"]) ? $context["field"] : null), "autocomplete", array());
            echo "\"";
        }
        // line 60
        echo "                                    ";
        if (twig_in_filter($this->getAttribute($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "validate", array()), "required", array()), array(0 => "on", 1 => "true", 2 => 1))) {
            echo "required=\"required\"";
        }
        // line 61
        echo "                                    ";
        if ($this->getAttribute($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "validate", array()), "pattern", array())) {
            echo "pattern=\"";
            echo $this->getAttribute($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "validate", array()), "pattern", array());
            echo "\"";
        }
        // line 62
        echo "                                    ";
        if ($this->getAttribute($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "validate", array()), "message", array())) {
            echo "title=\"";
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter(twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["field"]) ? $context["field"] : null), "validate", array()), "message", array())));
            echo "\"
                                    ";
        } elseif ($this->getAttribute(        // line 63
(isset($context["field"]) ? $context["field"] : null), "title", array(), "any", true, true)) {
            echo "title=\"";
            echo $this->env->getExtension('AdminTwigExtension')->tuFilter(twig_escape_filter($this->env, $this->getAttribute((isset($context["field"]) ? $context["field"] : null), "title", array())));
            echo "\" ";
        }
        // line 64
        echo "                                ";
    }

    public function getTemplateName()
    {
        return "forms/field.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  302 => 64,  296 => 63,  289 => 62,  282 => 61,  277 => 60,  270 => 59,  265 => 58,  260 => 57,  255 => 56,  248 => 55,  243 => 54,  236 => 53,  229 => 52,  222 => 51,  219 => 50,  213 => 65,  210 => 50,  206 => 48,  201 => 47,  195 => 44,  192 => 43,  188 => 68,  185 => 43,  182 => 42,  176 => 39,  172 => 38,  167 => 37,  164 => 36,  157 => 31,  151 => 29,  143 => 27,  140 => 26,  137 => 25,  132 => 69,  130 => 42,  127 => 41,  125 => 36,  119 => 35,  115 => 33,  113 => 25,  108 => 24,  102 => 21,  99 => 20,  95 => 19,  90 => 18,  86 => 17,  82 => 16,  76 => 14,  74 => 13,  67 => 12,  64 => 11,  59 => 71,  57 => 11,  50 => 10,  44 => 9,  41 => 8,  37 => 6,  35 => 5,  32 => 4,  30 => 3,  28 => 2,  26 => 1,);
    }
}
/* {% set originalValue = originalValue is defined ? originalValue : value %}*/
/* {% set value = (value is null ? field.default : value) %}*/
/* {% set vertical = field.style == 'vertical' %}*/
/* */
/* {% if field.yaml and value is iterable %}*/
/*     {% set value = value|toYaml %}*/
/* {% endif %}*/
/* */
/* {% block field %}*/
/*     <div class="form-field grid{% if vertical %} vertical{% endif %}">*/
/*         {% block contents %}*/
/*             <div class="form-label{% if not vertical %} block size-1-3{% endif %}">*/
/*                 {% if field.toggleable %}*/
/*                     <span class="checkboxes toggleable" data-grav-field="toggleable" data-grav-field-name="{{ field.name|fieldName }}">*/
/*                         <input type="checkbox"*/
/*                                id="toggleable_{{ field.name }}"*/
/*                                {% if originalValue is not null and originalValue is not empty %}value="1"{% endif %}*/
/*                                name="toggleable_{{ (scope ~ field.name)|fieldName }}"*/
/*                                {% if originalValue is not null and originalValue is not empty %}checked="checked"{% endif %}*/
/*                         >*/
/*                         <label for="toggleable_{{ field.name }}"></label>*/
/*                     </span>*/
/*                 {% endif %}*/
/*                 <label class="{{ field.toggleable ? 'toggleable' : '' }}">*/
/*                 {% block label %}*/
/*                     {% if field.help %}*/
/*                     <span class="hint--bottom" data-hint="{{ field.help|e|tu }}">{{ field.label|tu }}</span>*/
/*                     {% else %}*/
/*                     {{ field.label|tu }}*/
/*                     {% endif %}*/
/*                     {{ field.validate.required in ['on', 'true', 1] ? '<span class="required">*</span>' }}*/
/*                 {% endblock %}*/
/*                 </label>*/
/*             </div>*/
/*             <div class="form-data{% if not vertical %} block size-2-3{% endif %}"*/
/*                 {% block global_attributes %}*/
/*                 data-grav-field="{{ field.type }}"*/
/*                 data-grav-disabled="{{ originalValue is null ? 'true' : 'false' }}"*/
/*                 data-grav-default="{{ field.default|json_encode()|e('html_attr') }}"*/
/*                 {% endblock %}*/
/*             >*/
/*                 {% block group %}*/
/*                     {% block input %}*/
/*                         <div class="form-input-wrapper {{ field.size }}">*/
/*                             <input*/
/*                                 {# required attribute structures #}*/
/*                                 name="{{ (scope ~ field.name)|fieldName }}"*/
/*                                 value="{{ value|e('html_attr')|join(', ') }}"*/
/*                                 {# input attribute structures #}*/
/*                                 {% block input_attributes %}*/
/*                                     {% if field.classes is defined %}class="{{ field.classes }}" {% endif %}*/
/*                                     {% if field.id is defined %}id="{{ field.id|e }}" {% endif %}*/
/*                                     {% if field.style is defined %}style="{{ field.style|e }}" {% endif %}*/
/*                                     {% if field.disabled %}disabled="disabled"{% endif %}*/
/*                                     {% if field.placeholder %}placeholder="{{ field.placeholder|tu }}"{% endif %}*/
/*                                     {% if field.autofocus in ['on', 'true', 1] %}autofocus="autofocus"{% endif %}*/
/*                                     {% if field.novalidate in ['on', 'true', 1] %}novalidate="novalidate"{% endif %}*/
/*                                     {% if field.readonly in ['on', 'true', 1] %}readonly="readonly"{% endif %}*/
/*                                     {% if field.autocomplete in ['on', 'off'] %}autocomplete="{{ field.autocomplete }}"{% endif %}*/
/*                                     {% if field.validate.required in ['on', 'true', 1] %}required="required"{% endif %}*/
/*                                     {% if field.validate.pattern %}pattern="{{ field.validate.pattern }}"{% endif %}*/
/*                                     {% if field.validate.message %}title="{{ field.validate.message|e|tu }}"*/
/*                                     {% elseif field.title is defined %}title="{{ field.title|e|tu }}" {% endif %}*/
/*                                 {% endblock %}*/
/*                                 />*/
/*                         </div>*/
/*                     {% endblock %}*/
/*                 {% endblock %}*/
/*             </div>*/
/*         {% endblock %}*/
/*     </div>*/
/* {% endblock %}*/
/* */
