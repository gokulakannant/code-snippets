// Conditional Spreading in Array

const activeClass = "active";

const classArr = ["default-class", ...(activeClass ? [activeClass] : [])];

const className = classArr.join(" ");

// className = 'default-class active'
