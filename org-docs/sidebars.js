module.exports = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'cloud',
      items: ['cloud/azure-basics'],
    },
    {
      type: 'category',
      label: 'Onboarding',
      items: [
        'onboarding/new-staff',
        'onboarding/vpn-access',
      ],
    },
    {
      type: 'category',
      label: 'DevOps',
      items: [
        'devops/ci-cd',
        'devops/terraform',
        'devops/docker',
        'devops/kubernetes',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'security/access-control',
        'security/backup-policy',
        'security/incidence-response',
      ],
    },
  ],
};

