let members = [];

// Create a new webpack context to pull our members' component files
const ctx = require.context('.', false, /.+(-.+)+.js/);
const files = ctx.keys();
files.forEach(file => {
  // Pull the current module from context (ctx) by its name
  const mod = ctx(file);
  if (mod && mod.default) {
    members.push(mod.default);
  }
});

export default members.map(person => ({
  ...person,
  image: !person.image && require(`../../images/community/${person.id}.jpg`)
}));
