const requireField = (fieldName) => {
  return (value) => {
    if (String(value).length === 0) {
      return fieldName + " is required";
    }
    return true;
  };
};

module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
        validate: requireField("name"),
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "plop-templates/Component/Component.js.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.module.css",
        templateFile: "plop-templates/Component/Component.module.css.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/Component/index.js.hbs",
      },
      {
        type: "add",
        path: "src/components/index.js",
        templateFile: "plop-templates/injectable-index.js.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/components/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
      },
      {
        type: "append",
        path: "src/components/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
    ],
  });

  plop.setGenerator("page", {
    description: "Create a page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name?",
        validate: requireField("name"),
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "plop-templates/Page/Page.js.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.module.css",
        templateFile: "plop-templates/Page/Page.module.css.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/Page/index.js.hbs",
      },
      {
        type: "add",
        path: "src/pages/index.js",
        templateFile: "plop-templates/injectable-index.js.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/pages/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
      },
      {
        type: "append",
        path: "src/pages/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
    ],
  });

  plop.setGenerator("hook", {
    description: "Create a custom react hook",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your hook name?",
        validate: requireField("name"),
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/hooks/{{camelCase name}}.js",
        templateFile: "plop-templates/hook.js.hbs",
      },
      {
        type: "add",
        path: "src/hooks/index.js",
        templateFile: "plop-templates/injectable-index.js.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/hooks/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{camelCase name}} from './{{camelCase name}}';`,
      },
      {
        type: "append",
        path: "src/hooks/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{camelCase name}},`,
      },
    ],
  });

  plop.setGenerator("context", {
    description: "Create a context",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your context name?",
        validate: requireField("name"),
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/context/{{pascalCase name}}.js",
        templateFile: "plop-templates/Context/context.js.hbs",
      },
      {
        type: "add",
        path: "src/context/index.js",
        templateFile: "plop-templates/injectable-index.js.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/context/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
      },
      {
        type: "append",
        path: "src/context/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
      {
        type: "add",
        path: "src/hooks/use{{pascalCase name}}.js",
        templateFile: "plop-templates/Context/context-hook.js.hbs",
      },
      {
        type: "add",
        path: "src/hooks/index.js",
        templateFile: "plop-templates/injectable-index.js.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/hooks/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import use{{pascalCase name}} from './use{{pascalCase name}}';`,
      },
      {
        type: "append",
        path: "src/hooks/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\tuse{{pascalCase name}},`,
      },
    ],
  });
};
