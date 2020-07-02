# To add script as the site owner:
`<script src="https://martoncsikos.github.io/survey-test/survey.js"></script>`

# To test on live sites:
Go to 444.hu on google chrome.
[Open developer console](https://balsamiq.com/support/faqs/browserconsole)

Paste this, hit enter, close the console, wait 4 seconds:

```
(function() {
const scriptTarget = document.createElement("script");
scriptTarget.src = "https://martoncsikos.github.io/survey-test/survey.js";
document.body.appendChild(scriptTarget);
})()
```

Any other website or browser may work but no guarantee as it's a POC.
If you see something red in the console after you've hit enter, it won't work, try another site.
If the styling is off (covered, wrong size, can't see letters) it's because it's a POC. Try another site.
