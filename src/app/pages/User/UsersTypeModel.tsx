import React, {useState, useRef, useEffect} from 'react'
import {Modal} from 'react-bootstrap-v5'
import {Field, Form, Formik, FormikValues} from 'formik'
import * as Yup from 'yup'
// import {
//   editVehical,
//   postDrivers,
//   getDrivers,
//   getVehical,
//   editDriver,
// } from '../../modules/auth/redux/AuthCRUD'
// import {toast} from 'react-toastify'
// import {useSelector} from 'react-redux'

type Props = {
  show: boolean
  handleClose: () => void
}

interface IVehicle {
  name: string
}

// const inits: IVehicle = {
//   name: '',
// }

const UsersTypeModel: React.FC<Props> = ({
  show,
  handleClose,
  // setData,
  editData,
  // setEditData
}) => {
  let userSchema
  if (editData) {
    userSchema = Yup.object().shape({
      name: Yup.string().required('First Name is Required'),
    })
  } else {
    userSchema = Yup.object().shape({
      name: Yup.string().required('First Name is Required'),
    })
  }

  // const isAuthorized = useSelector(({auth}) => auth.accessToken)
  // const [options, setOptions] = useState()
  const [initValues, setInitialValues] = useState({
    name: '',
  })
  const formikRef = useRef()
  const submitStep = (values: IVehicle, actions: FormikValues) => {
    console.log(values)
    // if (editData && editData.id) {
    //   editDriver(isAuthorized, editData.id, values).then((data) => {
    //     if (data.status === 200) {
    //       actions.resetForm()
    //       toast.success(data.data.message)
    //       handleClose()
    //       getDrivers(isAuthorized)
    //         .then(({data}) => {
    //           var datas = data.data.data.map((el) => {
    //             delete el.vehicle
    //             return el
    //           })
    //           console.log(datas)
    //           setData(datas)
    //         })
    //         .catch(() => console.log('not valid data'))
    //     }
    //   })
    // } else {
    //   postDrivers(isAuthorized, values).then((data) => {
    //     if (data.status === 200) {
    //       actions.resetForm()
    //       toast.success(data.data.message)
    //       handleClose()
    //       getDrivers(isAuthorized).then(({data}) => {
    //         var datas = data.data.data.map((el) => {
    //           delete el.vehicle
    //           return el
    //         })
    //         console.log(datas)
    //         setData(datas)
    //       })
    //     }
    //   })
    // }
  }
  // useEffect(() => {
  //   getVehical(isAuthorized).then(({data}) => {
  //     setOptions(data.data.data)
  //   })
  // }, [])
  useEffect(() => {
    if (editData && formikRef.current && editData.email.length > 0) {
      for (let i = 0; i < Object.keys(editData).length; i++) {
        console.log(Object.keys(editData)[i], Object.values(editData)[i])
        // formikRef.current.setFieldValue(Object.keys(editData)[i], Object.values(editData)[i])
      }
    }
  }, [editData])

  return (
    <Modal
      className='modal fade'
      id='kt_modal_select_location'
      data-backdrop='static'
      tabIndex={-1}
      onHide={handleClose}
      role='dialog'
      show={show}
      dialogClassName='modal-dialog-centered mw-600px h-auto'
      aria-hidden='true'
      aria-labelledby='contained-modal-title-vcenter'
    >
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title'>
            {editData && editData.email.length ? 'Edit Users' : 'Add Users'}
          </h5>
          {/* <div className='btn btn-icon btn-sm btn-active-light-primary ms-2'></div> */}
        </div>
        <div className='modal-body'>
          <div className='stepper-nav ps-lg-10'>
            <Formik
              validationSchema={userSchema}
              initialValues={initValues}
              onSubmit={submitStep}
              //   innerRef={formikRef}
            >
              {({errors, touched, values, handleChange, setFieldValue}) => (
                <>
                  <Form>
                    <div className='form-group'>
                      <div className='d-flex justify-content-between mt-n5'>
                        <div className='d-flex flex-stack mb-2'>
                          {/* begin::Label */}
                          <label className='form-label fw-bolder text-dark fs-6 mb-0'>Name</label>
                        </div>
                      </div>
                      <div className='pt-3 pb-3'>
                        <Field
                          className='form-control form-control-lg form-control-solid'
                          name='name'
                          type='text'
                        />
                      </div>
                      {errors.name && touched.name ? (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>
                            <span style={{color: 'red'}} role='alert'>
                              {errors.name}
                            </span>
                          </div>
                        </div>
                      ) : null}
                    </div>

                    <div className='text-center'>
                      <div className='modal-footer'>
                        {editData ? (
                          <button type='submit' className='btn btn-primary'>
                            edit
                          </button>
                        ) : (
                          <button type='submit' className='btn btn-primary'>
                            submit
                          </button>
                        )}
                        <button
                          type='button'
                          onClick={() => handleClose()}
                          className='btn btn-light-primary'
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </Form>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default UsersTypeModel
