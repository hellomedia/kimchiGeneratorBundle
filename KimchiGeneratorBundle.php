<?php

/*
 *
 * (c) Nicolas Sauveur <nicolas.sauveur@gmail.com>
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Kimchi\Bundle\GeneratorBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

/**
 * KimchiGeneratorBundle.
 *
 * @author Nicolas Sauveur <nicolas.sauveur@gmail.com>
 */
class KimchiGeneratorBundle extends Bundle
{
    public function getParent()
    {
        return 'SensioGeneratorBundle';
    }
}
