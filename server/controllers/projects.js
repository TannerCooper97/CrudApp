export const allProjectsAPI = (req, res, next) => {
    let proj = {};
    proj.id = 1;
    proj._id = "a23142wsf23";
    proj.title = "Project 1";
    proj.description = "This is a project";
    let projArray = [];
    projArray.push(proj);
    return res.send(JSON.stringify(projArray));
}

export const delProjectAPI = (req, res, next) => {

}

export const addProjectAPI = (req, res, next) => {
    
}

export const updateProjectAPI = (req, res, next) => {
    
}