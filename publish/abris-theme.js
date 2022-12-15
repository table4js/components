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
    src: "/img/logo/long-logo-table.svg",
    alt: "abris-logo"
  })), /*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "header__pages"
  }, /*#__PURE__*/ typedoc.JSX.createElement("a", {
    class: "header__link-page",
    href: "/"
  }, "Main"),  /*#__PURE__*/ typedoc.JSX.createElement("a", {
    class: "header__link-page",
    href: "/examples"
  }, "Examples"), /*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "header__link-page header__link-page--active"
  }, "Documentation"), /*#__PURE__*/ typedoc.JSX.createElement("a", {
    class: "header__link-page",
    href: "#contact-form"
  }, "Contact us"), /*#__PURE__*/ typedoc.JSX.createElement("img", {
    class: "social__icon small-icon",
    src: "/img/footer/github.svg"
  })))));
}


function footer() {
  return   /*#__PURE__*/ typedoc.JSX.createElement("section", {
  }, /*#__PURE__*/ typedoc.JSX.createElement("section", {
    class: "section-container"
  },  /*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "page-size"
  }, /*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "form-back__container",
    id: "contact-form"
  }, /*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "headline"
  },  /*#__PURE__*/ typedoc.JSX.createElement("h2", {
    class: "title-h2",
    style: "text-align: center !important;" 
  },"Do you still have questions?")), /*#__PURE__*/ typedoc.JSX.createElement("form", {
    class: "form-back__form three-column",
    id: "contactForm",
    role: "form"
  }, /*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "text" 
  },"Name"), /*#__PURE__*/ typedoc.JSX.createElement("input", {
    class: "form-back__field text",
    id: "name",
    type: "text",
    placeholder: "Name",
    required: "true"
  },), /*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "text" 
  },"E-mail"), /*#__PURE__*/ typedoc.JSX.createElement("input", {
    class: "form-back__field text",
    id: "email",
    type: "email",
    placeholder: "E-mail",
    required: "true"
  },),/*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "text" 
  },"Message"),/*#__PURE__*/ typedoc.JSX.createElement("textarea", {
    class: "form-back__field text",
    id: "message",
    rows: "5",
    type: "text",
    placeholder: "Enter your message..",
    required: "true"
  },),/*#__PURE__*/ typedoc.JSX.createElement("button", {
    class: "button button--accent form-back__button one-column",
    id: "form-submit",
    onclick: "formSuccess()",
    type: "button"
  },"Send"),)), /*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "h-card form-back__succes form-back__succes--hidden",
    id: "contact-succes"
  }, /*#__PURE__*/ typedoc.JSX.createElement("img", {
    class: "h-card__img two-column",
    src: "/img/form-back/1.svg"
  },),/*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "v-card two-column"
  }, /*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "title-h3" 
  },"Your message has been sent successfully!"),/*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "text" 
  },"We will contact you soon"),/*#__PURE__*/ typedoc.JSX.createElement("button", {
    class: "button button--accent",
    id: "new-letter",
    onclick: "newletter()",
    type: "button"
  },"Send a new message"))))),  /*#__PURE__*/ typedoc.JSX.createElement("section", {
    class: "section-container color-middle-background"
  }, /*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "page-size"
  }, /*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "footer__container"
  }, /*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "footer__column two-column"
  }, /*#__PURE__*/ typedoc.JSX.createElement("img", {
    class: "footer__logo two-column h-card__img",
    src: "/img/logo/logo-table.svg"
  }), /*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "footer__ltd"
  }, "\xA9 2022 Table4JS Ltd")), /*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "footer__column one-column"
  }, /*#__PURE__*/ typedoc.JSX.createElement("a", {
    class: "header__link-page",
    href: "/"
  }, "Main"), /*#__PURE__*/ typedoc.JSX.createElement("a", {
    class: "header__link-page",
    href: "/examples"
  }, "Examples"), /*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "header__link-page",
    href: "/docs"
  }, "Documentation"), /*#__PURE__*/ typedoc.JSX.createElement("a", {
    class: "header__link-page",
    href: "mailto:table4js@gmail.com"
  }, "Contact us")), /*#__PURE__*/ typedoc.JSX.createElement("div", {
    class: "footer__column two-column"
  }, /*#__PURE__*/ typedoc.JSX.createElement("a", {
    href: "mailto:table4js@gmail.com",
    class: "social"
  }, /*#__PURE__*/ typedoc.JSX.createElement("img", {
    class: "social__icon small-icon",
    src: "/img/footer/email.svg"
  }), /*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "social__link"
  }, "info@abrisplatform.com")), /*#__PURE__*/ typedoc.JSX.createElement("a", {
    href: "https://github.com/table4js/components",
    class: "social"
  }, /*#__PURE__*/ typedoc.JSX.createElement("img", {
    class: "social__icon small-icon",
    src: "/img/footer/github.svg"
  }), /*#__PURE__*/ typedoc.JSX.createElement("span", {
    class: "social__link"
  }, "Abris Platform GitHub repo")))))));
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