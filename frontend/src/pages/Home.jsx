import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">Our app image </div>
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold">Download Our App!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to='/selectpost' className="btn btn-primary">Find a Smart Speaker</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
