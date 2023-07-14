/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, FC, useEffect, useRef} from 'react'
import axios from 'axios'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {useSelector} from 'react-redux'
import _ from 'lodash'
// import {
//   deleteUser,
//   getUsers,
//   getVehical,
//   updateUserStatus,
// } from '../../modules/auth/redux/AuthCRUD'
// import Swal from 'sweetalert2'
import {toast} from 'react-toastify'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css' // optional
import UsersTypeModel from './UsersTypeModel'

const UsersPage = () => {
  const isAuthorized = useSelector(({auth}) => auth.accessToken)
  const myRefname = useRef(null)
  const [show, setShow] = useState(false)
  const [data, setData] = useState()
  const [editData, setEditData] = useState({id: '', name: ''})
  const [editMode, setEditMode] = useState(false)
  // const deletItem = (values) => {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!',
  //   })
  //     .then((result) => {
  //       if (result.isConfirmed) {
  //         deleteUsers(isAuthorized, values)
  //           .then((response) => {
  //             console.log(response)
  //             toast.success(response.data.message)
  //             setData(data.filter((el) => el.id !== values))
  //             Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
  //           })
  //           .catch((error) => {
  //             Swal.fire({
  //               icon: 'error',
  //               title: 'Oops...',
  //               text: 'Something went wrong!',
  //               timer: 1500,
  //             })
  //           })
  //       }
  //     })
  //     .catch((err) => Swal.fire('', err.message, 'error'))
  // }
  const updateStatus = (values, status) => {
    // updateUsersStatus(isAuthorized, values, status).then(function (response) {
    //   toast.success(response.data.message)
    //   setData(data.map((item) => (item.id === values ? {...item, status: !status} : {...item})))
    // })
  }

  const handleClose = () => {
    setShow(false)
    // setEditMode(false)
  }
  const handleShow = () => {
    setShow(true)
    setEditMode(false)
  }
  const editActive = (item) => {
    setEditMode(true)
    setShow(true)

    setEditData(_.pick(item, 'id', 'name'))
  }
  // useEffect(() => {
  //   getUserss(isAuthorized)
  //     .then(({data}) => {
  //       var datas = data.data.data.map((el) => {
  //         delete el.vehicle
  //         return el
  //       })
  //       console.log(datas)
  //       setData(datas)
  //     })
  //     .catch(() => console.log('not valid data'))
  // }, [])

  return (
    <>
      {editMode ? (
        <>
          <UsersTypeModel
            show={show}
            handleClose={handleClose}
            setData={setData}
            editData={editData}
            setEditData={setEditData}
          />
        </>
      ) : (
        <UsersTypeModel show={show} handleClose={handleClose} setData={setData} />
      )}
      <div className='card'>
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bolder fs-3 mb-1'>Users</span>
            {/* <span className='text-muted mt-1 fw-bold fs-7'>Over 500 new products</span> */}
          </h3>
          <div className='card-toolbar'>
            <a
              ref={myRefname}
              onClick={() => handleShow()}
              className='btn btn-sm btn-light-primary'
            >
              <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
              New Users
            </a>
          </div>
        </div>
        <div className='card-body py-3'>
          <div className='table-responsive'>
            <table className='table align-middle table-row-bordered table-row-gray-100 gs-0 gy-3'>
              <thead>
                <tr className='fw-bolder text-muted bg-light'>
                  <th className='ps-4 min-w-50px rounded-start'>id</th>
                  <th className='min-w-125px'>Name</th>
                  <th className='min-w-100px'>Status</th>
                  <th className='min-w-100px'>Action</th>
                </tr>
              </thead>
              <tbody>
                {data && data.length > 0 ? (
                  data.map((item, index) => {
                    return (
                      <>
                        <tr style={{border: '0 0 1px 0 solid #f5f8fa'}}>
                          <td>
                            <div className='d-flex align-items-center'>
                              <div className='d-flex justify-content-start flex-column'>
                                <span className='text-dark fw-bolder text-hover-primary mb-1 ms-5 fs-6'>
                                  {item.vehicle_id}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className='d-flex align-items-center'>
                              <div className='d-flex justify-content-start flex-column'>
                                <span className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                                  {item.first_name}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className='d-flex align-items-center'>
                              <div className='d-flex justify-content-start flex-column'>
                                <span className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                                  {item.last_name}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className='d-flex align-items-center'>
                              <div className='d-flex justify-content-start flex-column'>
                                <span className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                                  {item.email}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className='d-flex align-items-center'>
                              <div className='d-flex justify-content-start flex-column'>
                                <span className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                                  {item.vehicle ? item.vehicle : 'Not Define'}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className='d-flex align-items-center'>
                              <div className='d-flex justify-content-start flex-column'>
                                <span className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                                  {item.avalibility ? item.avalibility : ''}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            {item.status ? (
                              <span className='badge badge-light-success fs-7 fw-bold'>Active</span>
                            ) : (
                              <span className='badge badge-light-danger fs-7 fw-bold'>
                                Not Active
                              </span>
                            )}
                          </td>
                          <td className='text-end'>
                            <Tippy
                              content={<span>Chnage Status</span>}
                              interactive={true}
                              interactiveBorder={20}
                              delay={100}
                            >
                              <a
                                onClick={() => updateStatus(item.id, item.status)}
                                className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                              >
                                <KTSVG
                                  path='/media/icons/duotune/general/gen019.svg'
                                  className='svg-icon-3'
                                />
                              </a>
                            </Tippy>
                            <Tippy content={<span>Edit</span>}>
                              <a
                                //    onClick={() => editActive(item)}
                                className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                              >
                                <KTSVG
                                  path='/media/icons/duotune/art/art005.svg'
                                  className='svg-icon-3'
                                />
                              </a>
                            </Tippy>
                            <Tippy content={<span>Delete</span>}>
                              <a
                                //     onClick={() => deletItem(item.id)}
                                className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                              >
                                <KTSVG
                                  path='/media/icons/duotune/general/gen027.svg'
                                  className='svg-icon-3'
                                />
                              </a>
                            </Tippy>
                          </td>
                        </tr>
                      </>
                    )
                  })
                ) : (
                  <>
                    <tbody>
                      <tr>
                        <td colSpan='3' style={{textAlign: 'center'}}>
                          No Data Found
                        </td>
                      </tr>
                    </tbody>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
export default UsersPage
