module.exports = {
  extends: [
    //"stylelint-config-sass-guidelines",
    //"stylelint-config-recommended",
    //"stylelint-config-recommended-scss",
    //"stylelint-config-twbs-bootstrap/scss",
    "stylelint-config-standard",
  ],
  plugins: ["stylelint-scss"],
  defaultSeverity: "warning",
  rules: {
    // recommended rules
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "selector-max-id": 2,
    "selector-no-qualifying-type": [
      true,
      {
        ignore: ["attribute", "class", "id"],
      },
    ],
    "scss/selector-no-redundant-nesting-selector": true,
  },
};
