import Composition from "./Composition";
import SimpleCompositor from "./SimpleCompositor";
import TeXcompositor from "./TeXcompositor";
import ArrayCompositor from "./ArrayCompositor";

const quick = new Composition(new SimpleCompositor()),
      slick = new Composition(new TeXcompositor()),
      iconic = new Composition(new ArrayCompositor())
quick.repair()
slick.repair()
iconic.repair()