function skillsMember() {
  return {
    skills: ['JavaScript', 'React', 'Node', 'Express', 'MongoDB'],
    getSkills: function() {
      return this.skills;
    },
    addSkill: function(skill) {
      this.skills.push(skill);
    },
    removeSkill: function(skill) {
      this.skills = this.skills.filter(s => s !== skill);
    }
  };
}