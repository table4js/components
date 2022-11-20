const typedoc = require("typedoc");

function header() {
  return /*#__PURE__*/ typedoc.JSX.createElement("section", {
    class: "header"
  }, /*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "page-size"
  }, /*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "header__contaier"
  }, /*#__PURE__*/ 
  typedoc.JSX.createElement("a", {
    class: "header__link-page",
    href: "/"
  }, 
  typedoc.JSX.createElement("img", {
    class: "header__logo",
    src: "/img/logo/logo-long.svg",
    alt: "abris-logo"
  })), /*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "header__pages"
  }, /*#__PURE__*/ typedoc.JSX.createElement("a", {
    class: "header__link-page",
    href: "/"
  }, "Main"), /*#__PURE__*/ typedoc.JSX.createElement("a", {
    class: "header__link-page",
    href: "/features"
  }, "Features"), /*#__PURE__*/ typedoc.JSX.createElement("a", {
    class: "header__link-page",
    href: "/examples"
  }, "Examples"), /*#__PURE__*/ typedoc.JSX.createElement("a", {
    class: "header__link-page",
    href: "/buy"
  }, "Get support"), /*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "header__link-page header__link-page--active"
  }, "Documentation"), /*#__PURE__*/ typedoc.JSX.createElement("a", {
    class: "header__link-page",
    href: "#contact-form"
  }, "Contact us"), /*#__PURE__*/ typedoc.JSX.createElement("a", {
    class: "header__link-page",
    href: "https://github.com/abris-platform/abris-components"
  }, "GitHub")))));
}

function footer() {
  return   /*#__PURE__*/ typedoc.JSX.createElement("section", {
    class: "footer__docs"
  }, /*#__PURE__*/ typedoc.JSX.createElement("section", {
    class: "form-back"
  },  /*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "page-size"
  }, /*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "form-back__container",
    id: "contact-form"
  }, /*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "headline"
  },  /*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "headline__text" 
  },"Do you still have questions?")), /*#__PURE__*/ typedoc.JSX.createElement("form", {
    class: "form-back__form three-column",
    id: "contactForm",
    role: "form"
  }, /*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "form-back__label" 
  },"Name"), /*#__PURE__*/ typedoc.JSX.createElement("input", {
    class: "form-back__field",
    id: "name",
    type: "text",
    placeholder: "Name",
    required: "true"
  },), /*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "form-back__label" 
  },"E-mail"), /*#__PURE__*/ typedoc.JSX.createElement("input", {
    class: "form-back__field",
    id: "email",
    type: "email",
    placeholder: "E-mail",
    required: "true"
  },),/*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "form-back__label" 
  },"Message"),/*#__PURE__*/ typedoc.JSX.createElement("textarea", {
    class: "form-back__field",
    id: "message",
    rows: "5",
    type: "text",
    placeholder: "Enter your message..",
    required: "true"
  },),/*#__PURE__*/ typedoc.JSX.createElement("button", {
    class: "button button--accent form-back__button",
    id: "form-submit",
    onclick: "formSuccess()",
    type: "button"
  },"Send"),)), /*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "features__reason reason-left form-back__succes form-back__succes--hidden",
    id: "contact-succes"
  }, /*#__PURE__*/ typedoc.JSX.createElement("img", {
    class: "reason-img",
    src: "/img/form-back/1.svg"
  },),/*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "reason-column"
  }, /*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "headline__text three-column" 
  },"Your message has been sent successfully!"),/*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "reason__description two-column" 
  },"We will contact you soon"),/*#__PURE__*/ typedoc.JSX.createElement("button", {
    class: "button form-back__button",
    id: "new-letter",
    onclick: "newletter()",
    type: "button"
  },"Send a new message"))))),  /*#__PURE__*/ typedoc.JSX.createElement("section", {
    class: "footer blue-top-background"
  }, /*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "page-size"
  }, /*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "footer__container"
  }, /*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "footer__column two-column"
  }, /*#__PURE__*/ typedoc.JSX.createElement("img", {
    class: "footer__logo two-column",
    src: "/img/logo/logo.svg"
  }), /*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "footer__ltd"
  }, "\xA9 2022 Research laboratory ABRIS Ltd")), /*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "footer__column one-column"
  }, /*#__PURE__*/ typedoc.JSX.createElement("a", {
    class: "header__link-page",
    href: "/"
  }, "Main"), /*#__PURE__*/ typedoc.JSX.createElement("a", {
    class: "header__link-page",
    href: "/examples"
  }, "Examples"), /*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "header__link-page",
    href: "/buy"
  }, "Buy"), /*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "header__link-page",
    href: "/docs"
  }, "Documentation"), /*#__PURE__*/ typedoc.JSX.createElement("a", {
    class: "header__link-page",
    href: "mailto:info@abris.site"
  }, "Contact us")), /*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "footer__column two-column"
  }, /*#__PURE__*/ typedoc.JSX.createElement("a", {
    href: "mailto:info@abrisplatform.com",
    class: "social"
  }, /*#__PURE__*/ typedoc.JSX.createElement("img", {
    class: "social__icon",
    src: "/img/footer/email.svg"
  }), /*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "social__link"
  }, "info@abrisplatform.com")), /*#__PURE__*/ typedoc.JSX.createElement("a", {
    href: "https://www.youtube.com/channel/UCkENTPqm7neTGbysFQV6mfw",
    class: "social"
  }, /*#__PURE__*/ typedoc.JSX.createElement("img", {
    class: "social__icon",
    src: "/img/footer/youtube.svg"
  }), /*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "social__link"
  }, "Abris Platform on youtube")), /*#__PURE__*/ typedoc.JSX.createElement("a", {
    href: "https://github.com/abris-platform/abris-components",
    class: "social"
  }, /*#__PURE__*/ typedoc.JSX.createElement("img", {
    class: "social__icon",
    src: "/img/footer/github.svg"
  }), /*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "social__link"
  }, "Abris Platform GitHub repo")), /*#__PURE__*/ typedoc.JSX.createElement("a", {
    href: "https://www.facebook.com/abrisplatform/",
    class: "social"
  }, /*#__PURE__*/ typedoc.JSX.createElement("img", {
    class: "social__icon",
    src: "/img/footer/facebook.svg"
  }), /*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "social__link"
  }, "Abris Platform on Facebook")), /*#__PURE__*/ typedoc.JSX.createElement("a", {
    href: "https://www.linkedin.com/in/abris-platform-9149361ab/",
    class: "social"
  }, /*#__PURE__*/ typedoc.JSX.createElement("img", {
    class: "social__icon",
    src: "/img/footer/linkedin.svg"
  }), /*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "social__link"
  }, "Abris Platform on LinkedIn")))))));
}

function load(app) {
  app.renderer.hooks.on("body.begin", () => {
    return header();
  });
  app.renderer.hooks.on("body.end", () => {
    return footer();
  });
  app.renderer.hooks.on("head.end", () => {
    // console.log(JSON.stringify(arguments[0].options));
    return typedoc.JSX.createElement("link", {
      rel: "stylesheet",
      href: "/style.css"
    });
  });
}

exports.load = load;