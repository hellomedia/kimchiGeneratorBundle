KimchiGeneratorBundle
=====================

The ``KimchiGeneratorBundle`` extends and provides customizations
for the Symfony2 ``SensioGeneratorBundle``.

Installation
------------

Before using this bundle in your project, add it to your ``composer.json`` file:

.. code-block:: bash

    $ composer require kimchi/generator-bundle

Then, like for any other bundle, include it in your Kernel class::

    public function registerBundles()
    {
        $bundles = array(
            ...

            new Kimchi\Bundle\GeneratorBundle\KimchiGeneratorBundle(),
        );

        ...
    }

List of Available Commands
--------------------------

The ``KimchiGeneratorBundle`` comes with four new commands that can be run in
interactive mode or not. The interactive mode asks you some questions to
configure the command parameters to generate the definitive code. The list of
new commands are listed below:

.. toctree::
   :maxdepth: 1

   commands/generate_bundle
   commands/generate_controller
   commands/generate_doctrine_crud
   commands/generate_doctrine_entity
   commands/generate_doctrine_form

