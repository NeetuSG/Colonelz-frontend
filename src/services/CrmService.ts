import appConfig from '@/configs/app.config';
import ApiService from './ApiService'
import { NotificationResponse } from '@/components/template/Notification';
import { ProfileFormModel } from '@/views/Context/userdetailsContext';
import { RoleResponse } from '@/views/crm/Profile/Roles';
import { RoleList } from '@/views/crm/Roles/RolesContext';
import { RoleAccessData } from '@/@types/navigation';
import { LeadResponseType, UserResponse } from '@/views/crm/AddUserToLead';
import { ProjectResponseType, ReportResponse, TaskResponse, UserList } from '@/views/crm/CustomerDetail/CustomerDetail';
import { FileManagerLeadType, UserListResponse } from '@/views/crm/FileManager/Components/Lead/Folders';
import { MomResponse } from '@/views/crm/Inventory/components/DataTable';
import { ProjectResponse } from '@/views/crm/AddMemberToProject';
import { ApiResponse, DataType } from '@/views/crm/CustomerDetail/store/MomContext';
import { TaskDataResponse } from '@/views/crm/CustomerDetail/Task/TaskDetails/TaskDetails';
import { SubTaskResponse } from '@/views/crm/CustomerDetail/Task/Subtasks/Subtasks';
import { UsersResponse } from '@/views/crm/users';
import { TimerResponse } from '@/views/crm/CustomerDetail/Task/Subtasks/SubTaskDetailsDrawer';
import { ApiResponseData } from '@/views/crm/FileManager/Components/type';
import { CompanyDataResponse, FileManagerResponseType } from '@/views/crm/FileManager/Components/data';
import { ArchiveResponse } from '@/views/crm/FileManager/Components/Template/Archive/Components/Index';
import { Data } from '@/views/crm/FileManager/Components/Project/data';
import { ContractResponseType } from '@/views/crm/CustomerDetail/components/Contract';
import { LeadDetailsResponse } from '@/views/crm/LeadsDetails/LeadDetail';
import { ArchiveUserResponseType } from '@/views/crm/users/ArchivedUsers';

const { apiPrefix } = appConfig
const token = localStorage.getItem('auth');
const userId=localStorage.getItem('userId');



export async function apiGetNotification<T>(userId: string | null) {
    return ApiService.fetchData<NotificationResponse>({
        url: `admin/get/notification?userId=${userId}`,
        method: 'get',
    }).then(
        (response)=>{
            return response.data
        }
    )
}

export async function apiGetUserData<T>(UserId:string | null) {
    return ApiService.fetchData<ProfileFormModel>({
        url: `users/getdata?userId=${userId}`,
        method: 'get',
    }).then((response) => {
        return response.data

    })
}

export async function apiGetRoleDetails<T>() {
    return ApiService.fetchData<RoleResponse>({
        url: `admin/get/role`,
        method: 'get',
    }).then((response) => {
        return response.data

    })
}


export async function apiGetRoleList<T>() {
    return ApiService.fetchData<RoleList>({
        url: `admin/get/rolename`,
        method: 'get',
    }).then((response) => {
        return response.data

    }).catch((error) => {
        throw new Error(`HTTP error! status: ${error}`);

    })
}

export async function apiGetRoleWiseDetails<T>() {
    return ApiService.fetchData<RoleAccessData>({
        url: `admin/rolewise/access?role=ADMIN`,
        method: 'get',
    }).then((response) => {
        return response.data

    }).catch((error) => {
        throw new Error(`HTTP error! status: ${error}`);
    })
}



export async function apiCreateRole<
    U extends Record<string, unknown>
>(data: U) {
    return ApiService.fetchData<any>({
        url: 'admin/create/role',
        method: 'post',
        data,
    }).then(
        (response)=>{
            console.log(response.data);
            return response.data
            
        }
    )
}


    export async function apiEditRoles(data: any,id:string |null) {
    return ApiService.fetchData<any>({
        url: `admin/update/role?id=${id}`,
        method: 'put',
        data,}).then(
        (response)=>{return response.data})}



export async function apiDeleteRole(id:string |null) {
    const response = await fetch(`${apiPrefix}admin/delete/role?id=${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        
    });
    const responseData = await response.json();

    return responseData;}


export async function addProfilePhoto(Data: any) {
    const response = await fetch(`${apiPrefix}users/profileurl`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: Data
    });

    return response;}
export async function addcontractinfileManager(Data: any) {
    const response = await fetch(`${apiPrefix}admin/view/contract`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: Data
    });

    return response;}

export async function EditPassword(Data: any) {
    const response = await fetch(`${apiPrefix}users/change/password`, {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(Data)
    });

    return response;
}

export async function apiGetUsers<T>() {
    return ApiService.fetchData<UsersResponse>({
        url: `admin/get/alluser?id=${localStorage.getItem('userId')}`,
        method: 'get',
    }).then((response) => {
        return response.data

    }).catch((error) => {
        throw new Error(`HTTP error! status: ${error}`);
    })
}


export async function apiDeleteUsers(userid: string) {
    const response=await fetch(`${apiPrefix}admin/delete/user?userId=${userid}&id=${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ userId: userId })
    });
    return response;
}



export async function apiGetDeletedUsers<T>() {
    return ApiService.fetchData<ArchiveUserResponseType>({
        url: `admin/archive/user`,
        method: 'get',
    }).then((response) => {
        return response.data

    }).catch((error) => {
        throw new Error(`HTTP error! status: ${error}`);
    })
}


export async function apiRestoreDeletedUsers(UserId: any) {
    const response = await fetch(`${apiPrefix}admin/restore/user`, {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({user_id:UserId})
    });

    return response;}
export async function apiPermanantlyDeleteUsers(userId: string) {
    const response=await fetch(`${apiPrefix}admin/delete/archive/user`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ user_id: userId })
    });
    return response;
}
    
export async function addMemberToProject(Data: any) {
    const response = await fetch(`${apiPrefix}admin/add/member`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(Data)
    });

    return response;}
export async function apiPutNotificationUpdate(notificationId: string,type:string) {
    const response = await fetch(`${apiPrefix}admin/update/notification`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify({ userId: userId,type: type, notification_id: notificationId })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

export async function apiGetUsersList<T>(projectId:string) {
    return ApiService.fetchData<UserList>({
        url: `admin/get/user/project?project_id=${projectId}`,
        method: 'get',
    }).then((response) => {
        return response.data

    })
}

export async function apiGetAllUsersList<T>() {
    return ApiService.fetchData<UserListResponse>({
        url: `admin/get/userlist?user_id=${userId}`,
        method: 'get',
    }).then((response) => {
        return response.data

    })
}


export async function apiGetMomData<T>() {
    return ApiService.fetchData<MomResponse>({
        url: `admin/getall/project/mom?id=${userId}`,
        method: 'get',
    }).then((response) => {
        return response.data
    })
}

export async function apiCreateMom(formData: any) {
    const response=await fetch(`${apiPrefix}admin/create/mom/`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth')}`,
        },
        body: formData,
      });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Received response from server:', data);
    return data;
}



export async function apishareMom(formData: any) {
    const response=await fetch(`${apiPrefix}admin/send/momdata`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth')}`,
        },
        body: formData,
      });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Received response from server:', data);
    return data;
}

export async function apiGetCrmProjects<T>() {
    return ApiService.fetchData<ProjectResponse>({
        url: `admin/getall/project/?id=${userId}`,
        method: 'get',
    }).then((response) => {
        console.log(response.data)
        return response.data
    })
}

export async function apiGetCrmProjectMakeContract(formData: any) {
    const response = await fetch(`${apiPrefix}admin/view/contract`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
        
    });

    return response;
}
export async function apiGetCrmSingleProjectQuotation(projectId:string ) {
    const response = await fetch(`${apiPrefix}admin/get/quotationdata/?project_id=${projectId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        },
        
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data)
    return data;
}

// export async function apiGetCrmSingleProjectQuotation<T>(projectId:string) {
//     return ApiService.fetchData<T>({
//         url: `admin/get/quotationdata/?project_id=${projectId}`,
//         method: 'get',
//     }).then((response) => {
//         console.log(response.data)
//         return response.data
//     })
// }

export async function apiGetCrmProjectShareQuotation(formData: any) {
    const response = await fetch(`${apiPrefix}admin/share/quotation`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
        
    });

    return response;
}
export async function apiGetCrmProjectShareContractApproval(formData: any) {
    const response = await fetch(`${apiPrefix}admin/contract/approval`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
        
    });

    return response;
}
export async function apiGetCrmProjectShareQuotationApproval(formData: any) {
    const response = await fetch(`${apiPrefix}admin/quotation/approval`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
        
    });

    return response;
} 

export async function apiGetCrmSingleProjects<T>(projectId:string) {
    return ApiService.fetchData<ProjectResponseType>({
        url: `admin/getsingle/project/?project_id=${projectId}&id=${userId}`,
        method: 'get',
    }).then((response) => {
        return response.data
    })
}


export async function apiGetCrmSingleProjectReport<T>(projectId:string | null) {
    return ApiService.fetchData<ReportResponse>({
        url: `admin/gettask/details?project_id=${projectId}`,
        method: 'get',
    }).then((response) => {
        return response.data
    })
}

export async function apiGetCrmSingleProjectEdit(formData: any) {
    try {
      const response = await fetch(`${apiPrefix}admin/update/project/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify({
          ...formData,
        }),
      });
      return response;
    } catch (error) {
      console.error('Error in apiGetCrmSingleProjectEdit:', error);
    }
  }

export async function apiGetCrmProjectsMom<T>(projectId:string) {
    return ApiService.fetchData<ApiResponse>({
        url: `admin/getall/mom/?project_id=${projectId}`,
        method: 'get',
    }).then((response) => {
        return response.data
    })
}

export async function apiGetCrmProjectsAddTask(Data: any) {
    const response = await fetch(`${apiPrefix}admin/create/task`, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(Data)
    });

    const data = await response.json();
    console.log('Received response from server:', data);
    return data;
}


export async function apiGetCrmProjectsTaskData<T>(projectId:string) {
    return ApiService.fetchData<TaskResponse>({
        url: `admin/get/all/task?user_id=${userId}&project_id=${projectId}`,
        method: 'get',
    }).then((response) => {
        console.log(response.data)
        return response.data
    })
}

export async function apiGetCrmProjectsSingleTaskData<T>(projectId:string |null,taskId:string | null) {
    return ApiService.fetchData<TaskDataResponse>({
        url: `admin/get/single/task?user_id=${userId}&project_id=${projectId}&task_id=${taskId}`,
        method: 'get',
    }).then((response) => {
        console.log(response.data)
        return response.data
    })
}

export async function apiGetCrmProjectsTaskUpdate(task:any) {
    const response = await fetch(`${apiPrefix}admin/update/task`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(task)
    });
    const data = await response.json();
    console.log('Received response from server:', data);
    return data;
}
export async function apiGetCrmProjectsTaskDelete(Data:any) {
    const response = await fetch(`${apiPrefix}admin/delete/task`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(Data)
    });

    const data = await response.json();
    console.log('Received response from server:', data);
    return data;
}

export async function apiGetCrmProjectsSubTaskData<T>(projectId:string,taskId:string) {
    return ApiService.fetchData<SubTaskResponse>({
        url: `admin/get/all/subtask?user_id=${userId}&project_id=${projectId}&task_id=${taskId}`,
        method: 'get',
    }).then((response) => {
        return response.data
    })
}

export async function apiGetCrmProjectsAddSubTask(Data: any) {
    const response = await fetch(`${apiPrefix}admin/create/subtask`, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(Data)
    });

    const data = await response.json();
    console.log('Received response from server:', data);
    return data;
}

export async function apiGetCrmProjectsSingleSubTaskDetails(projectId:string,taskId:string,subTaskId:string) {
    const response = await fetch(`${apiPrefix}admin/get/single/subtask?user_id=${userId}&project_id=${projectId}&task_id=${taskId}&sub_task_id=${subTaskId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        },
    });

    const data = await response.json();
    console.log('Received response from server:', data);
    return data;
}


export async function apiGetCrmProjectsSubTaskUpdate(task:any) {
    const response = await fetch(`${apiPrefix}admin/update/subtask`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(task)
    });

    const data = await response.json();
    console.log('Received response from server:', data);
    return data;
}
export async function apiGetCrmProjectsSubTaskDelete(Data:any) {
    const response = await fetch(`${apiPrefix}admin/delete/subtask`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(Data)
    });

    const data = await response.json();
    console.log('Received response from server:', data);
    return data;
}

export async function apiGetCrmProjectsSingleSubTaskTimer(Data:any) {
    const response = await fetch(`${apiPrefix}admin/update/subtask/time`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(Data)
    });

    const data = await response.json();
    console.log('Received response from server:', data);
    return data;
}

export async function apiGetCrmProjectsSingleSubTaskDataTimer<T>(projectId:string,taskId:string,subTaskId:string) {
    return ApiService.fetchData<TimerResponse>({
        url: `admin/get/subtask/time?project_id=${projectId}&task_id=${taskId}&sub_task_id=${subTaskId}`,
        method: 'get',
    }).then((response) => {
        return response.data
    })
}

export async function apiGetCrmFileManager<T>() {
    return ApiService.fetchData<FileManagerResponseType>({
        url: `admin/getfile/`,
        method: 'get',
    }).then((response) => {
        console.log(response)
        return response.data
    })
}

export async function apiGetCrmFileManagerCompanyData<T>() {
    return ApiService.fetchData<FileManagerResponseType>({
        url: `admin/get/companydata`,
        method: 'get',
    }).then((response) => {
        console.log(response)
        return response.data
    })
}

export async function apiGetCrmFileManagerArchive<T>(userId:string | null) {
    return ApiService.fetchData<ArchiveResponse>({
        url: `admin/get/archive?user_id=${userId}`,
        method: 'get',
    }).then((response) => {
        console.log(response)
        return response.data
    })
}

export async function apiGetCrmFileManagerArchiveRestore(Formdata:any) {
    const response = await fetch(`${apiPrefix}admin/restore/file`, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(Formdata)
        
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}
export async function apiGetCrmFileManagerDeleteArchiveFiles(postData: any) {
    const response = await fetch(`${apiPrefix}admin/delete/archive`, {
        method: 'Delete',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(postData)
        
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Received response from server:', data);
    return data;
}

export async function apiGetCrmFileManagerProjects<T>(projectId:string | null) {
    return ApiService.fetchData<Data>({
        url: `admin/project/getfile/?project_id=${projectId}`,
        method: 'get',
    }).then((response) => {
        console.log(response)
        return response.data
    })
}

export async function apiGetCrmFileManagerCreateLeadFolder(formData: any) {
    const response = await fetch(`${apiPrefix}admin/fileupload/`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
        
    });

    return response;
}

export async function apiDeleteFileManagerFolders(data: any) {
    return ApiService.fetchData<any>({
        url: 'admin/delete/folder',
        method: 'delete',
        data,
    }).then((response) => {
        return response.data;
    });
}
export async function apiDeleteFileManagerFiles(data: any) {
    return ApiService.fetchData<any>({
        url: 'admin/delete/file',
        method: 'delete',
        data,
    }).then((response) => {
        return response.data;
    });
}
export async function apiGetCrmFileManagerCreateProjectFolder(data: any) {
    return ApiService.fetchData<any>({
        url: 'admin/project/fileupload',
        method: 'post',
        data,
    }).then((response) => {
        return response.data;
    });
}
export async function apiGetCrmFileManagerCreateTemplateFolder(data: any) {
    return ApiService.fetchData<any>({
        url: 'admin/template/fileupload',
        method: 'post',
        data,
    }).then((response) => {
        return response.data;
    });
}

export async function apiGetCrmFileManagerLeads<T>(leadId:string | null) {
    return ApiService.fetchData<FileManagerLeadType>({
        url: `admin/lead/getfile/?lead_id=${leadId}`,
        method: 'get',
    }).then((response) => {
        console.log(response)
        return response.data
    })
}

export async function apiGetCrmContractDetails<T>(leadId:string | null) {
    return ApiService.fetchData<ContractResponseType>({
        url: `admin/get/contractdata?lead_id=${leadId}`,
        method: 'get',
    }).then((response) => {
        console.log(response)
        return response.data
    })
}





export async function apiGetCrmFileManagerShareFiles(data: any) {
    return ApiService.fetchData<any>({
        url: 'admin/share/file',
        method: 'post',
        data,
    }).then((response) => {
        return response.data;
    });
}
export async function apiGetCrmFileManagerShareContractFile(data: any) {
    return ApiService.fetchData<any>({
        url: 'admin/share/contract',
        method: 'post',
        data,
    }).then((response) => {
        return response.data;
    });
}


export async function apiGetCrmLeads<T>() {
    return ApiService.fetchData<LeadResponseType>({
        url: `admin/getall/lead/`,
        method: 'get',
    }).then((response) => {
        console.log(response)
        return response.data
    })
}

export async function apiGetCrmLeadsDetails<T>(leadId:string | null) {
    return ApiService.fetchData<LeadDetailsResponse>({
        url: `admin/getsingle/lead/?lead_id=${leadId}`,
        method: 'get',
    }).then((response) => {
        console.log(response)
        return response.data
    })
}

export async function apiLeadsAnotherProject(data: any) {
    return ApiService.fetchData<any>({
        url: 'admin/lead/multiple/project',
        method: 'post',
        data,
    }).then((response) => {
        return response.data;
    });
}
export async function apiGetCrmCreateLead(data: any) {
    return ApiService.fetchData<any>({
        url: 'admin/create/lead/',
        method: 'post',
        data,
    }).then((response) => {
        return response.data;
    });
}
export async function apiGetCrmCreateLeadToProject(data: any) {
    return ApiService.fetchData<any>({
        url: 'admin/create/lead/project',
        method: 'post',
        data,
    }).then((response) => {
        return response.data;
    });
}
export async function apiGetCrmLeadsUpdates(data: any) {
    return ApiService.fetchData<any>({
        url: 'admin/update/lead/',
        method: 'put',
        data,
    }).then((response) => {
        return response.data;
    });
}
export async function apiGetCrmEditLead(data: any) {
    return ApiService.fetchData<any>({
        url: 'admin/update/lead/data/',
        method: 'put',
        data,
    }).then((response) => {
        return response.data;
    });
}





