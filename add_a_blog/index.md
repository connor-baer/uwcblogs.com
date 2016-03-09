---
layout: page
title: Add a blog
---

<form action="//formspree.io/hello@connorbaer.io"
      method="POST">
    <label for="firstname">What's your first name?</label>
    <input type="text" name="firstname" placeholder="Jane" required="true" autofocus="true">
    <label for="_replyto">What's your email address?</label>
    <input type="email" name="_replyto" placeholder="jane@example.com" required="true">
    <label for="link">What's the link to your blog?</label>
    <input type="url" name="link" placeholder="janesblog.wordpress.com" required="true">
    <label for="country">Which country do you come from?</label>
    <input type="text" name="country" placeholder="e.g. Germany" required="true">
    <label for="language">What language do you blog in?</label>
    <input type="text" name="language" placeholder="e.g. English & German" required="true">
    <label for="uwc">Which college do/did you attend?</label>
    <select name="uwc" required="true">
		<option value="italy">UWC Adriatic</option>
		<option value="wales">UWC Atlantic College</option>
		<option value="costarica">UWC Costa Rica</option>
		<option value="china">UWC Changshu China</option>
		<option value="armenia">UWC Dilijan</option>
		<option value="hongkong">UWC Li Po Chun</option>
		<option value="netherlands">UWC Maastricht</option>
		<option value="india">Mahindra UWC Of India</option>
		<option value="uwc-adriatic">UWC Mostar</option>
		<option value="canada">UWC Pearson College</option>
		<option value="norway">UWC Red Cross Nordic</option>
		<option value="germany">UWC Robert Bosch College</option>
		<option value="singapore">UWC South East Asia</option>
		<option value="usa">UWC USA</option>
		<option value="swaziland">Waterford Kamhlaba UWC</option>
	</select>
    <label for="year">What year will/did you finish UWC?</label>
    <input type="number" name="year" placeholder="e.g. 2017" required="true">
    <input type="hidden" name="_subject" value="New UWC Blog Submission" />
    <input type="hidden" name="_next" value="//connorbaer.io/success.html" />
    <input type="text" name="_gotcha" style="display:none" />
    <button type="submit">Submit and feel accomplished!</button>
</form>