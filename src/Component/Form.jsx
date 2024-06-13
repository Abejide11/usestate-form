import style from '../Component/Des.module.css'
import pic from '../assets/pic.svg'
export default function Form({
    fullname,
    emailaddress,
    phonenumber,
    password,
    username,
    onChangeFullName,
    onChangeEmailAddress,
    onChangePhoneNumber,
    onChangeUsername,
    onChangePassword,
    onSubmit }) {
    return (
        <div>
            <div className={style.container}>
                <div className={style.child1}>
                    <div className={style.picture}>

                        <img src={pic} alt="" />
                    </div>
                </div>
                <div className={style.child2}>
                <div className={style.personal}>
                    <h2>personal profile</h2>
                </div>
                    <form action="">
                        <div className={style.profile}>

                            <label htmlFor="">fullname</label>
                            <input placeholder='enter Fullname' onChange={onChangeFullName} value={fullname}   type="text"  name=""   id=""  />
                        </div>
                        <div className={style.profile}>

                            <label htmlFor="">emailaddress</label>
                            <input placeholder='enter your Emailaddress' onChange={onChangeEmailAddress} value={emailaddress} type="text" />
                        </div>
                        <div className={style.profile}>

                            <label htmlFor="">phonenumber</label>
                            <input placeholder='enter Phonenumber' onChange={onChangePhoneNumber} value={phonenumber} type="text" />
                        </div>
                        <div className={style.profile}>

                            <label htmlFor="">Username</label>
                            <input placeholder='enter your Username'  onChange={onChangeUsername} value={username} type="text" name="" id="" />
                        </div>
                        <div className={style.profile}>

                            <label htmlFor="">password</label>
                            <input placeholder='enter Password' onChange={onChangePassword} value={password} type="text" />
                        </div>
                        <div className={style.but}>
                        <button onSubmit={onSubmit}>submit</button>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}