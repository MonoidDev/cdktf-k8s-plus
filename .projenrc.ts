const { cdktf } = require('projen');
const project = new cdktf.ConstructLibraryCdktf({
  author: 'AustinZhu',
  authorAddress: '42071208+AustinZhu@users.noreply.github.com',
  cdktfVersion: '0.4.0',
  defaultReleaseBranch: 'main',
  name: 'cdktf-k8s-plus',
  repositoryUrl: 'git@github.com:MonoidDev/cdktf-k8s-plus.git',
  depsUpgrade: false,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.synth();
