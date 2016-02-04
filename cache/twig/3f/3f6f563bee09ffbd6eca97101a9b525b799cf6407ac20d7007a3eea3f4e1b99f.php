<?php

/* register.html.twig */
class __TwigTemplate_153da55664396331898e253ba078b1e9caeb4442d62845d868a7dc254f687343 extends Twig_Template
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
        $this->loadTemplate("register.html.twig", "register.html.twig", 1, "1817212793")->display(array_merge($context, array("title" => "Grav Register Admin User", "classes" => "wide")));
    }

    public function getTemplateName()
    {
        return "register.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  19 => 1,);
    }
}


/* register.html.twig */
class __TwigTemplate_153da55664396331898e253ba078b1e9caeb4442d62845d868a7dc254f687343_1817212793 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = $this->loadTemplate("partials/register.html.twig", "register.html.twig", 1);
        $this->blocks = array(
            'instructions' => array($this, 'block_instructions'),
            'form' => array($this, 'block_form'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "partials/register.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_instructions($context, array $blocks = array())
    {
        // line 4
        echo "    <div class=\"instructions\">
        ";
        // line 5
        echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array());
        echo "
    </div>
    ";
    }

    // line 9
    public function block_form($context, array $blocks = array())
    {
        // line 10
        echo "        ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "form", array()), "fields", array()));
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
        foreach ($context['_seq'] as $context["_key"] => $context["field"]) {
            // line 11
            echo "            ";
            if ($this->getAttribute($context["field"], "type", array())) {
                // line 12
                echo "                ";
                $context["value"] = $this->getAttribute((isset($context["form"]) ? $context["form"] : null), "value", array(0 => $this->getAttribute($context["field"], "name", array())), "method");
                // line 13
                echo "                <div class=\"wrapper-";
                echo $this->getAttribute($context["field"], "name", array());
                echo "\">
                    ";
                // line 14
                $this->loadTemplate(array(0 => (((("forms/fields/" . $this->getAttribute($context["field"], "type", array())) . "/") . $this->getAttribute($context["field"], "type", array())) . ".html.twig"), 1 => "forms/fields/text/text.html.twig"), "register.html.twig", 14)->display($context);
                // line 15
                echo "                </div>
            ";
            }
            // line 17
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
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['field'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 18
        echo "
        <div class=\"form-actions secondary-accent\">

            <button type=\"reset\" class=\"button secondary\"><i class=\"fa fa-exclamation-circle\"></i> ";
        // line 21
        echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.LOGIN_BTN_CLEAR");
        echo "</button>
            <button type=\"submit\" class=\"button primary\"><i class=\"fa fa-sign-in\"></i> ";
        // line 22
        echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.LOGIN_BTN_CREATE_USER");
        echo "</button>

        </div>

    ";
    }

    public function getTemplateName()
    {
        return "register.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  138 => 22,  134 => 21,  129 => 18,  115 => 17,  111 => 15,  109 => 14,  104 => 13,  101 => 12,  98 => 11,  80 => 10,  77 => 9,  70 => 5,  67 => 4,  64 => 3,  19 => 1,);
    }
}
/* {% embed 'partials/register.html.twig' with {title:'Grav Register Admin User', classes:'wide'} %}*/
/* */
/*     {% block instructions %}*/
/*     <div class="instructions">*/
/*         {{ page.content }}*/
/*     </div>*/
/*     {% endblock %}*/
/* */
/*     {% block form %}*/
/*         {% for field in page.header.form.fields %}*/
/*             {% if field.type %}*/
/*                 {% set value = form.value(field.name) %}*/
/*                 <div class="wrapper-{{ field.name }}">*/
/*                     {% include ["forms/fields/#{field.type}/#{field.type}.html.twig", 'forms/fields/text/text.html.twig'] %}*/
/*                 </div>*/
/*             {% endif %}*/
/*         {% endfor %}*/
/* */
/*         <div class="form-actions secondary-accent">*/
/* */
/*             <button type="reset" class="button secondary"><i class="fa fa-exclamation-circle"></i> {{ 'PLUGIN_ADMIN.LOGIN_BTN_CLEAR'|tu }}</button>*/
/*             <button type="submit" class="button primary"><i class="fa fa-sign-in"></i> {{ 'PLUGIN_ADMIN.LOGIN_BTN_CREATE_USER'|tu }}</button>*/
/* */
/*         </div>*/
/* */
/*     {% endblock %}*/
/* */
/* {% endembed %}*/
/* */
