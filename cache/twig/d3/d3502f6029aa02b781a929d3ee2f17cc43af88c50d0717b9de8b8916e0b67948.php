<?php

/* partials/register.html.twig */
class __TwigTemplate_180dcb4489b6b8f08584b357377d8f68b89a6d872919cf628c9077f5c4c58dfc extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("partials/base.html.twig", "partials/register.html.twig", 1);
        $this->blocks = array(
            'page' => array($this, 'block_page'),
            'instructions' => array($this, 'block_instructions'),
            'form' => array($this, 'block_form'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "partials/base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_page($context, array $blocks = array())
    {
        // line 4
        echo "    <section id=\"admin-login\" class=\"default-glow-shadow ";
        echo (isset($context["classes"]) ? $context["classes"] : null);
        echo "\">
        <h1>
            ";
        // line 6
        echo (isset($context["title"]) ? $context["title"] : null);
        echo "
        </h1>

        ";
        // line 9
        $this->loadTemplate("partials/messages.html.twig", "partials/register.html.twig", 9)->display($context);
        // line 10
        echo "
        ";
        // line 11
        $this->displayBlock('instructions', $context, $blocks);
        // line 12
        echo "
        <form method=\"post\" action=\"";
        // line 13
        echo (isset($context["base_url_relative"]) ? $context["base_url_relative"] : null);
        echo "\">
            <div class=\"padding\">
            ";
        // line 15
        $this->displayBlock('form', $context, $blocks);
        // line 16
        echo "
            ";
        // line 17
        echo $this->env->getExtension('GravTwigExtension')->nonceFieldFunc("form", "form-nonce");
        echo "
            </div>
        </form>
    </section>
";
    }

    // line 11
    public function block_instructions($context, array $blocks = array())
    {
    }

    // line 15
    public function block_form($context, array $blocks = array())
    {
    }

    public function getTemplateName()
    {
        return "partials/register.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  79 => 15,  74 => 11,  65 => 17,  62 => 16,  60 => 15,  55 => 13,  52 => 12,  50 => 11,  47 => 10,  45 => 9,  39 => 6,  33 => 4,  30 => 3,  11 => 1,);
    }
}
/* {% extends 'partials/base.html.twig' %}*/
/* */
/* {% block page %}*/
/*     <section id="admin-login" class="default-glow-shadow {{ classes }}">*/
/*         <h1>*/
/*             {{ title }}*/
/*         </h1>*/
/* */
/*         {% include 'partials/messages.html.twig' %}*/
/* */
/*         {% block instructions %}{% endblock %}*/
/* */
/*         <form method="post" action="{{ base_url_relative }}">*/
/*             <div class="padding">*/
/*             {% block form %}{% endblock %}*/
/* */
/*             {{ nonce_field('form', 'form-nonce') }}*/
/*             </div>*/
/*         </form>*/
/*     </section>*/
/* {% endblock %}*/
