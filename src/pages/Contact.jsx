function Contact() {

const submitForm=(e)=>{
e.preventDefault();

alert("Thank you for contacting ONFUGE!");
};

return (

<div className="page">

<h1>Contact Us</h1>

<form onSubmit={submitForm}>

<input
type="text"
placeholder="Name"
required
/>

<input
type="email"
placeholder="Email"
required
/>

<textarea
placeholder="Message"
/>

<button type="submit">
Send Message
</button>

</form>

<h3>Founder</h3>
<p>Prince Dangi</p>

<h3>Phone</h3>
<p>6367167465</p>

<h3>Email</h3>
<p>onfuge@gmail.com</p>

</div>

);
}

export default Contact;